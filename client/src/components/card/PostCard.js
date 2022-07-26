import { useHistory, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { MdOutlineBedroomChild, MdMeetingRoom, MdOutlineBathroom } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";


export function PostCard({ post }) {
  const navigate = useHistory();
  return (
    <div>
      {(post.habilitada==="pub") && <div>
        
      <div className="p-3 m-2 bg-light shadow rounded hover-overlay" onClick={() => navigate(`/posts/${post._id}`)}>
        <Link to={`/posts/${post._id}`}>Publicacion</Link>
        <Card style={{ width: '67rem' }} className='text-center '>

        <Card.Body>
          <Container>  
            <Row>
              <Col sm={4}>
                <Card.Title>
                  <h5 className="p-1 mb-2 bg-light text-dark text-left">{post.nombre}</h5>
                </Card.Title>
              </Col>
              <Col sm={6}>
                <Card.Subtitle className="mb-2 text-muted text-left">{post.detalle}</Card.Subtitle></Col>
              <Col sm={2}> </Col>
              <Col sm={3}>                
              </Col>
            </Row>            
            <Row>
              <Col sm={4}>
                <Card.Title>
                  <h6>{post.direccion} - {post.altura} - {post.barrio}</h6>
                </Card.Title>
              </Col>              
            </Row>
             <Row>
              <Col sm={2}>
                <Card.Text>
                 <MdMeetingRoom/> {post.ambientes}amb.
                  </Card.Text>
              </Col>
              <Col sm={3}>m2 Const:
                {post.metrosconstruidos}
              </Col>              
            </Row>
            <Row>  
              <Col sm={2}>
              <MdOutlineBedroomChild/>{post.habitaciones} hab.
              </Col>
              <Col sm={3}>m2 Const:
                {post.metrosterreno}
              </Col>
              
                       
            </Row>
            <Row>
              <Col sm={2}>
                <MdOutlineBathroom/>{post.banos} ban.
              </Col>   
              <Col sm={2}>                
                <BsBuilding/>{post.plantas} pisos
              </Col>  

            </Row>
            <Row>  
              
              <Col sm={3}>                
              </Col>
              <Col sm={2}>
                {post.image && <img src={post.image.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
              <Col sm={2}>
                {post.imagea && <img src={post.imagea.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
              <Col sm={2}>
                {post.imagec && <img src={post.imagec.url} alt={post.title} className="w-100 p-0 rounded-3"/>}
              </Col>
            </Row>
            <Row>              
            </Row>           
            <Row>
              <Col sm={4} className="p-1 mb-2 bg-light text-secondary">
                usuario: {post.usuario}
              </Col>
              <Col sm={4}></Col>
              <Col sm={4} className="text-secondary text-small">cod. pub.: {post._id}</Col>
            </Row>
          </Container>
        </Card.Body>



        
      </Card>  
      
      
      
        
         
    </div>





      </div>}


    </div>
  );
}
