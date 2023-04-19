import React, { useEffect, useState } from "react";
import { Container, Col,Image,Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchOneDevice } from "../http/deviceApi";

function DevicePage() {
  const [device, setDevice] = useState({info:[]})
  const {id} = useParams()
  useEffect(()=>{
    fetchOneDevice(id).then(data=>setDevice(data))
  },[])
  
  return (
   <Container className="mt-3">
    <Row>
     <Col md={4}>
      <Image width={300} height={300} src={process.env.REACT_APP_API_URL+device.img}/>
     </Col>
     <Col md={4}>
      <Row>
       <h2>{device.name}</h2>
      </Row>
     </Col>
     <Col md={4}>
      <h3>{device.price}</h3>
      <Button>Добавить в корзину</Button>
     </Col>
     </Row>
    
     <Row className="d-flex flex-column m-3">
     {device.info.map((info,index)=>
      <Row key={info.id} style={
        {background:index%2===0?'lightgray':'transparent', 
        padding:10, borderRadius:10}}>
        {info.title}: {info.description}
      </Row>
     )}
     </Row>
     
   </Container>
  );
}

export default DevicePage;
