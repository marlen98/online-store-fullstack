import React, { useContext } from "react";
import { useState } from "react";
import { Container,Form,Card,Button,Row,NavLink } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useLocation, useNavigate } from "react-router";
import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const click = async () => {
    try {
    let data
    if (isLogin){
     data = await login(email,password)
    }else {
     data = await registration(email,password)
    user.setUser(user)
    user.setIsAuth(true)
    navigate(SHOP_ROUTE)
    }} catch(e){
      alert(e.response.data.message)
    }
    
  }
    
  
  return (
<Container 
   className="d-flex justify-content-center align-items-center"
   style={{height: window.innerHeight - 55}}
>
 <Card style={{width:600}} className='p-5'>
     <h1 className="text-black-50">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
  <Form className="d-flex flex-column">
    <Form.Control 
    className="mt-3" 
    placeholder="Введите адрес"
    value={email}
    onChange={e=>setEmail(e.target.value)}/>
    <Form.Control 
    className="mt-4" 
    placeholder="Введите пароль"
    type='password'
    value={password}
    onChange={e=>setPassword(e.target.value)}
    />
  
    <Row  className="mt-3 d-flex justify-content-center align-items-center">
    { isLogin ? <div> 
       Нет аккаунта ?
       <NavLink 
         className="mt-3"
         style={{color:'orange'}}
         href={REGISTRATION_ROUTE}
         >Создать аккаунт</NavLink>
  </div> 
  :
  <div>
    Уже есть аккаунт ?
     <NavLink 
         className="mt-3"
         style={{color:'orange'}}
         href={LOGIN_ROUTE}
         >Войдите</NavLink>
  </div>
}
  </Row>
  <Button 
   className="align-self-end"
   variant={'outline-dark'}
   onClick={click}
   >
    {isLogin ?'Войти':'Создать'}</Button>
   
   </Form>
   </Card>

   </Container>
  );
})

export default Auth;
