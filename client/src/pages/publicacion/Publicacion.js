import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col } from 'react-bootstrap';
import { PostCard} from '../../components/card/PostCard';
import { usePosts } from "../../context/postContext";
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import  Hero  from '../../views/home/hero'



export function Publicacion() {
  const { posts } = usePosts();
  const { user } = useAuth0();
  
  return (
    <div> 
      <Hero/>
      <Container>
          
          
          
          
          <Row className="px-4 my-5">
            <Col sm={6}>   
                  
            </Col>
              
              

            <Col>
              <Row>
              
                
            

              </Row>
                
              
            </Col>  

             
            

                         
           

          </Row>
          
          
          <Row>
            <Card body  className='text-center bg-dark text-white my-1 py-1'>
              Presione la tarjeta de la propiedad que desea ver con mas detalle</Card>
          </Row>

            <div>  
              
              {posts.map((post) => (
                
                <PostCard  key={post._id} post={post} />
                    
                      
                  ))}

            
            
              
              

            
            </div>
            
            <Row>
                {user.sub==="google-oauth2|107981664545875597842" && (<Link to="/posts/pre" 
                    className="p-1 mb-2 bg-secondary text-white"> Admin Pedro</Link>)}
                </Row>
                <Row>
                {user.sub==="google-oauth2|113430184194669712462" && (<Link to="/posts/pre" 
                    className="p-1 mb-2 bg-secondary text-white"> Admin Maxi</Link>)}
                </Row>
                <Row>
                  <Link to="/posts/ven" className="p-1 mb-2 bg-secondary text-white">
                    Propiedades vendidas/alquiladas</Link>
                </Row>







          </Container>  

    
    
    
    
    
     </div>
  )
}

