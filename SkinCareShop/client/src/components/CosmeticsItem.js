import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {COSMETICS_ROUTE} from "../utils/consts";

const CosmeticsItem = ({cosmetics}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(COSMETICS_ROUTE + '/' + cosmetics.id)}>
            <Card className={"Item"} style={{width: 150, cursor: 'pointer'}} >
                <Image width={148} height={200} src={process.env.REACT_APP_API_URL + cosmetics.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="Price">{cosmetics.price} $</div>
                    <div className="d-flex align-items-center">
                        <div>{cosmetics.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{cosmetics.name}</div>
            </Card>
        </Col>
    );
};

export default CosmeticsItem;
