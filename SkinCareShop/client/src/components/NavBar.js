import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './index.css';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar className="Nav" style={{backgroundColor: '#C9A0DC', color: '#8A496B'}}>

            <Container >
                <NavLink className="Skin" style={{color: '#8A496B'}} to={SHOP_ROUTE}>Skin Care Products</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: '#8A496B'}}>

                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="Navigator ml-2" >
                            Admin Panel
                        </Button>
                        <Button variant={"outline-light"} onClick={() =>logOut()}  className="Navigator ml-2">
                            Exit
                        </Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button className="Navigator ml-2" variant={"outline-light"}
                                onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>

                }
            </Container>
        </Navbar>

    );
});

export default NavBar;