import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {cosmetics} = useContext(Context)

    return (
        <Row className="d-flex">
            {cosmetics.brands.map(brand =>
                <Card
                    style={{cursor:'pointer', background: '#c181de'}}
                    key={brand.id}
                    className="Brand p-3 mr-3"
                    onClick={() => cosmetics.setSelectedBrand(brand)}
                    border={brand.id === cosmetics.selectedBrand.id ? '' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;