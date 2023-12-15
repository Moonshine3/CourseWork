import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand} from "../../http/cosmeticsAPI";

const CreateBrand = ({show, onHide}) => {
        const [value, setValue] = useState('')

        const addBrand = () => {
            createBrand({name: value}).then(data => {
                setValue('')
                onHide()
            })
        }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header className="Cont1" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="Cont1">
                <Form>
                    <Form.Control className="none"
                                  value={value}
                                  onChange={e => setValue(e.target.value)}
                                  placeholder={"Enter Name Of Brand"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className="Cont2">
                <Button className="But2" style={{color: '#c0106d'}} variant="outline"  onClick={onHide}>Close</Button>
                <Button className="But2" style={{color: '#c0106d'}} variant="outline"  onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;