const uuid = require('uuid')
const path = require('path');
const {Cosmetics, CosmeticsInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class CosmeticsController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const cosmetics = await Cosmetics.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    CosmeticsInfo.create({
                        title: i.title,
                        description: i.description,
                        cosmeticsId: cosmetics.id
                    })
                )
            }

            return res.json(cosmetics)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let cosmetic;
        if (!brandId && !typeId) {
            cosmetic = await Cosmetics.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            cosmetic = await Cosmetics.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            cosmetic = await Cosmetics.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            cosmetic = await Cosmetics.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(cosmetic)
    }

    async getOne(req, res) {
        const {id} = req.params
        const cosmetics = await Cosmetics.findOne(
            {
                where: {id},
                include: [{model: CosmeticsInfo, as: 'info'}]
            },
        )
        return res.json(cosmetics)
    }
}

module.exports = new CosmeticsController()
