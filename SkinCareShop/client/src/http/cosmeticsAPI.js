import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createCosmetics = async (cosmetics) => {
    const {data} = await $authHost.post('api/cosmetics', cosmetics)
    return data
}

export const fetchCosmetics = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/cosmetics', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneCosmetics = async (id) => {
    const {data} = await $host.get('api/cosmetics/' + id)
    return data
}
