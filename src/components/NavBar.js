import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(()=>{
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const logIn = () => {
        user.setUser({})
        user.setIsAuth(true)
        navigate(LOGIN_ROUTE)
    }
    const logOut = () => {
        user.setIsAuth(false)
        navigate(SHOP_ROUTE)
    }
    return (
     
     <Navbar bg="dark" variant="dark">
     <Container>
          <Navbar.Brand href={SHOP_ROUTE}>TECHNIC</Navbar.Brand>
                {user.isAuth===false?
                    <Nav className="ml-auto d-flex m-2" 
                    style={{color: 'white'}}>
                        
                        <Button
                            variant={"outline-light"}
                            className="me-2"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        
                        
                        <Button
                            variant={"outline-light"}
                            onClick={() => logIn()}
                        
                        >
                            Войти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => 
                       logOut()} >Выйти</Button>
                    </Nav>
}
      </Container> 
      </Navbar>
      
    )
})

export default NavBar