import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createCosmetics, fetchBrands, fetchTypes} from "../../http/cosmeticsAPI";

const CreateCosmetics = observer(({show, onHide}) => {
    const {cosmetics} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => cosmetics.setTypes(data))
        fetchBrands().then(data => cosmetics.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCosmetics = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', cosmetics.selectedBrand.id)
        formData.append('typeId', cosmetics.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createCosmetics(formData).then(() => onHide())
    }

    return (
        <Modal
            className="Mod"
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton className="Cont1">
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Skin Care Cosmetic
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="Cont1">
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{cosmetics.selectedType.name || "Chose Type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cosmetics.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => cosmetics.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{cosmetics.selectedBrand.name || "Chose Brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cosmetics.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => cosmetics.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="none mt-3"
                        placeholder="Enter The Name Of Your Product"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="none mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="none mt-3"
                        type="file"
                        placeholder="Select Your File"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        className="But2"
                        style={{ color: "#8A496B"}}
                        variant={"outline"}
                        onClick={addInfo}
                    >
                        Add New Cosmetic Product
                    </Button>
                    {info.map(i =>
                        <Row className="Cont1 mt-4" key={i.number}>
                            <Col md={6}>
                                <Form.Control
                                    className="none"
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder={"Enter Name Of Description"}
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control
                                    className="none"
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder={"Enter Description"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    className="But3"
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline"}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer className="Cont2">
                <Button className="But3" variant="outline" onClick={onHide}>Close</Button>
                <Button className="But2" variant="outline" onClick={addCosmetics}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCosmetics;
