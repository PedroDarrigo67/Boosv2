import  Heroven  from '../../views/home/posteo/heroven';
import { usePosts } from "../../context/postContext";
import {useAuth0} from '@auth0/auth0-react';
import { PostCardpre } from "../../components/card/PostCardpre"

export function Publicacionpre() {
  const { posts } = usePosts();
  const { user } = useAuth0();
  
  return (
    <div><Heroven/>
      <div>
        {posts.map((post) => (
                <PostCardpre  key={post._id} post={post} />
                  ))}
      </div>
    
    
    
    </div>    
  )
}

