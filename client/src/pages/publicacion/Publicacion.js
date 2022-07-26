import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col } from 'react-bootstrap';
import { PostCard} from '../../components/card/PostCard';
import { usePosts } from "../../context/postContext";
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import  Hero  from '../../views/home/posteo/hero';
import { BsCardHeading } from "react-icons/bs";



export function Publicacion() {
  const { posts } = usePosts();
  const { user } = useAuth0();
  
  return (
    <div> 
      <Hero/>
      
      <h4><BsCardHeading/> Publicaciones</h4>
            <div>            
              {posts.map((post) => (
                <PostCard  key={post._id} post={post} />
                  ))}
            </div>
                {user.sub==="google-oauth2|107981664545875597842" && (<Link to="/posts/pre" 
                    className="p-1 mb-2 bg-secondary text-white"> Admin Pedro</Link>)}                
                {user.sub==="google-oauth2|113430184194669712462" && (<Link to="/posts/pre" 
                    className="p-1 mb-2 bg-secondary text-white"> Admin Maxi</Link>)}               
                  
     </div>
  )
}

