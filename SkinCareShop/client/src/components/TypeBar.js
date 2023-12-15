import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {cosmetics} = useContext(Context)
    return (
        <ListGroup>
            {cosmetics.types.map(type =>
                <ListGroup.Item
                    className="Type1 mb-1"
                    style={{cursor: 'pointer', background: '#c181de'}}
                    active={type.id === cosmetics.selectedType.id}
                    onClick={() => cosmetics.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;