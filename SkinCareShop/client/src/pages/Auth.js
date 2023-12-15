import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (

        <Container
            className="ACard d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 550}}
        >

            <Card style={{width: 500}} className="Card p-5">

                <h2 className="Auth m-auto">{isLogin ? 'Authorisation' : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3 none"
                        placeholder="Enter Your Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3 none"
                        placeholder="Enter Your Password.."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Don't Have An Account? <NavLink className="But2" to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                            </div>
                            :
                            <div>
                                Already Sign up? <NavLink className="But2" to={LOGIN_ROUTE}>Enter!</NavLink>
                            </div>
                        }
                        <Button
                            className={"Mine"}
                            variant={"outline-light"}
                            onClick={click}
                        >
                            {isLogin ? 'Enter' : 'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
