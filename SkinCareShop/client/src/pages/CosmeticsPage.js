import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneCosmetics} from "../http/cosmeticsAPI";

const CosmeticsPage = () => {
    const [cosmetics, setCosmetics] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneCosmetics(id).then(data => setCosmetics(data))
    }, [])


    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image className="Img" width={301} height={409} src={process.env.REACT_APP_API_URL + cosmetics.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="NameCos">{cosmetics.name}</h2>
                        <div
                            className="Rate d-flex align-items-center justify-content-center"
                        >
                            Rating: {cosmetics.rating} ✨
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="Cont d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300}}
                    >
                        <h3>Price: {cosmetics.price} $</h3>
                        <Button className="But2" variant={"outline"} style={{ color: '#8A496B'}}>Add to Basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1 className="Char">Characteristic:</h1>
                {cosmetics.info.map((info) =>
                    <Row key={info.id} className="Desc mt-3">
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default CosmeticsPage;
