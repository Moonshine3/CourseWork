import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import CosmeticsList from "../components/CosmeticsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchCosmetics, fetchTypes} from "../http/cosmeticsAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {cosmetics} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => cosmetics.setTypes(data))
        fetchBrands().then(data => cosmetics.setBrands(data))
        fetchCosmetics(null, null, 1, 4).then(data => {
            cosmetics.setCosmetic(data.rows)
            cosmetics.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchCosmetics(cosmetics.selectedType.id, cosmetics.selectedBrand.id, cosmetics.page, 4).then(data => {
            cosmetics.setCosmetic(data.rows)
            cosmetics.setTotalCount(data.count)
        })
    }, [cosmetics.page, cosmetics.selectedType, cosmetics.selectedBrand,])

    return (
        <Container>
          <Row className="mt-2">
              <Col md={3}>
                <TypeBar/>
              </Col>
              <Col md={9}>
                <BrandBar/>
                  <CosmeticsList/>
                  <Pages className="Page" />
              </Col>
          </Row>
        </Container>
    );
});

export default Shop;