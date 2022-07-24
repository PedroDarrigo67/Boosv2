import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import Rosario from "../../imagenes/rosario.png";
import Cordoba from "../../imagenes/cordoba.png";
import Buenos from "../../imagenes/buenosaires.png";
import SanLuis from "../../imagenes/sanluis.png";
import Comodoro from "../../imagenes/comodoro.png";
import "./image.css"

const Hero = () => (
  <div className="text-center hero">
    <Container>
     <br/>
        
        <Col sm={4}><h1 className="text-bold ">Inmoprof</h1></Col>
        <Col sm={2}></Col>
        
        <Row>
           
           <Col sm={6}>
              <Row>
                 <Col sm={8} ><h4>Lorem ipsum dolor sit amet</h4></Col>
                
              </Row>
              
              <Row>
              <p className="text-center text-body">
              Lorem ipsum dolor sit amet. Ab iste quae vel quis dolorum vel 
              aliquid temporibus non nemo voluptatem id velit enim in architecto 
              dolore. Nam illo molestiae aut placeat galisum sed quidem enim.

              Hic minus error quo eligendi deserunt rem dolorem sint ab 
              doloribus eius et labore exercitationem qui temporibus tenetur. 
              Rem possimus dolore ut internos magni eum sequi molestiae quaerat 
              repellendus. Sed tenetur vero aut libero autem vel debitis doloremque.
              </p>
              </Row>

           
           
           
           
           </Col>
        
        
           <Col sm={6}> 
              <Row> 
                 <Col sm={3} className="rotate">
                    <Image style={{ width: '12rem' }} src={Cordoba} rounded />
                 </Col>
                 <Col sm={3} className="rotate1">
                    <Image style={{ width: '9rem' }} src={Rosario} rounded />
                 </Col>
                 <Col sm={3}>
                    <Image style={{ width: '9rem' }} src={Buenos} rounded />
                 </Col>
              </Row>
              <Row> 
                 <Col sm={3} className="rotate1">
                    <Image style={{ width: '7rem' }} src={Cordoba} rounded />
                 </Col>
                 <Col sm={3} >
                    <Image style={{ width: '9rem' }} src={SanLuis} rounded />
                 </Col>
                 <Col sm={3} className="rotate2">
                    <Image style={{ width: '9rem' }} src={Comodoro} rounded />
                 </Col>
              </Row>
           
           
           
           
           </Col>
        
        
        
        
        
         </Row>
      
    </Container>




  </div>
);

export default Hero;
