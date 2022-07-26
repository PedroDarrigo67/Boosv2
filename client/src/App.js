import { Route, Switch } from "react-router-dom";
import { NavBar, Loading } from "./components/autentica";
import { useAuth0 } from "@auth0/auth0-react";
import  Home  from "./views/home/posteo/home";
import  Profile  from "./views/profile";
import ProtectedRoute from "./auth/protected-route";
import ExternalApi from "./views/external-api";
import { PostProvider } from "./context/postContext";
import { Publicacion, HomePart, PostFormEdit, PostForm, Publicacionven, Publicacionpre } from "./pages/index";
import "./App.css";

function App() {
  const { isLoading } = useAuth0(); 

  if (isLoading) {
    return <Loading />;
  }

  // 

  return (
    <div id="app" className="d-flex flex-column h-100 appback" >
        <PostProvider>
        <NavBar />        
           <div className="container flex-grow-1">
           <Switch> 
              <Route path="/" exact component={Home} />


              <ProtectedRoute path="/posts/:id" component={HomePart} /> 
              <ProtectedRoute path="/posts" component={Publicacion} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />
              <ProtectedRoute path="/new" component={PostForm} />
              <ProtectedRoute path='/edit/posts/:id' component={PostFormEdit} />
              <ProtectedRoute path="/vendida" component={Publicacionven} />   
              <ProtectedRoute path="/vendida" component={Publicacionpre} /> 
              
              
                        
           </Switch>
           
          </div>
          </PostProvider>    
    </div>
  );
}

export default App;
