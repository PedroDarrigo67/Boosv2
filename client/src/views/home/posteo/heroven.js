import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import  image1  from "../../../imagenes/Administrador.png"

const Heroven = () => (
  <div className="text-center hero">
    <Container>
     <br/>
     <br/>     
         <Row>   
            <Col sm={2}><Image style={{ width: '5rem' }} src={image1} rounded /></Col>
            <Col sm={4}>
               <Row>
                  <h1 className="text-bold">Inmoprof</h1>
                  <h2 className="text-bold">Seccion administrativa</h2>
               </Row>
            </Col>           
        </Row>
        
      
    </Container>




  </div>
);

export default Heroven;
