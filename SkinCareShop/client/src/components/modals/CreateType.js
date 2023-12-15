import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/cosmeticsAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
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
                <Modal.Title  id="contained-modal-title-vcenter">
                    Add Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="Cont1">
                <Form>
                    <Form.Control className="none"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                      placeholder={"Enter Name Of Type"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer className="Cont2">
                <Button className="But2" style={{color: '#c0106d'}} variant="outline-light" onClick={onHide}>Close</Button>
                <Button className="But2" style={{color: '#c0106d'}} variant="outline-light" onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;