import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
      <Row className="d-flex">
    {device.brands.map(brand =>
        <Card 
       style={{cursor:'pointer'}}
       key={brand.id} 
       className=" w-25 m-1"
       onClick={()=>device.setSelectedBrand(brand)}
       border = {brand.id === device.selectedBrand.id?'dark':'light'}
       >

       {brand.name}
        </Card>
        )}
      </Row>
) 
})

export default BrandBar