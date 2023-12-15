import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCosmetics from "../components/modals/CreateCosmetics";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [cosmeticsVisible, setCosmeticsVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-light"}
                className="But1 mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add Type
            </Button>
            <Button
                variant={"outline-light"}
                className="But1 mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add Brand
            </Button>
            <Button
                variant={"outline-light"}
                className="But1 mt-4 p-2"
                onClick={() => setCosmeticsVisible(true)}
            >
                Add Cosmetic Product
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateCosmetics show={cosmeticsVisible} onHide={() => setCosmeticsVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
