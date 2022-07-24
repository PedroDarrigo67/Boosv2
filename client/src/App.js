import { Route, Switch, Routes } from "react-router-dom";
import { NavBar, Loading } from "./components/autentica";
import { useAuth0 } from "@auth0/auth0-react";
import  Home  from "./views/home/home";
import  Profile  from "./views/profile";
import ProtectedRoute from "./auth/protected-route";
import ExternalApi from "./views/external-api";
import { PostProvider } from "./context/postContext";
import { Publicacion } from "./pages/index";




function App() {
  const { isLoading } = useAuth0(); 

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100" >
        <PostProvider>
        <NavBar />
        
           <div className="container flex-grow-1">
           <Switch> 
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/posts" component={Publicacion} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />

              
           </Switch>
           
          </div>
          </PostProvider>    
    </div>
  );
}

export default App;
