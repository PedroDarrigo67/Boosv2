import  Heroven  from '../../views/home/posteo/heroven';
import { usePosts } from "../../context/postContext";
import {useAuth0} from '@auth0/auth0-react';
import { PostCardven } from "../../components/card/PostCardven"

export function Publicacionven() {
  const { posts } = usePosts();
  const { user } = useAuth0();
  
  return (
    <div><Heroven/>
      <div>
        {posts.map((post) => (
                <PostCardven  key={post._id} post={post} />
                  ))}
      </div>
    
    
    
    </div>    
  )
}

