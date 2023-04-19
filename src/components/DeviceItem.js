import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device})=>{
    const navigate = useNavigate()
    return(
<Col md={3} onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)}>
    <Card style={{margin:20,width:150, height:150, cursor:'pointer'}} border={'light'}>
      <Image width={150} height={150} src={process.env.REACT_APP_API_URL+device.img}/>
      <div className="d-flex justify-content-between align-items-center">
     <div>Samsung</div>
     <div>{device.rating}<Image src={star}/></div>
     
         </div>
         <div>{device.name}</div>
    </Card>
</Col>
    )
}

export default DeviceItem