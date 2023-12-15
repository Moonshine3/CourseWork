import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CosmeticsItem from "./CosmeticsItem";

const CosmeticsList = observer(() => {
    const {cosmetics} = useContext(Context)
    return (
        <Row className="List d-flex">
            {cosmetics.cosmetic.map(cosmetics =>
                <CosmeticsItem key={cosmetics.id} cosmetics={cosmetics}/>
            )}
        </Row>
    );
});

export default CosmeticsList;
