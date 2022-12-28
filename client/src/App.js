
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import Posts from "./components/posts/Posts";
import { useContext } from "react";
import { Context } from "./context/Context";

// This code is a React component that renders a Router with Routes and components. The Router is used to navigate between different pages, and the Routes are used to define which components should be rendered for each page. The code also uses the useContext hook to get the user from the Context, and then uses an if statement to determine which component should be rendered depending on whether or not the user is logged in. If the user is logged in, they will be directed to the Home page, otherwise they will be directed to either Register, Login, Write or Setting page. Finally, it renders a Single component for any postId that is passed in as a parameter.

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route path="/register" element={user ? <Home/> : <Register />}/>{/*if user is registered direct to home page otherwise register*/}
               
          <Route path="/login" element={user ? <Home/> : <Login />}/>{/*if user is login in start at home page*/}
             
          <Route path="/write" element={user ? <Write/> : <Register />}/>{/*if user wants to write they must be registered*/}
              
          <Route path="/setting" element={user ? <Setting/> : <Register />}/> {/*to change settling user must be registered*/}
            
          <Route path="/post/:postId" element={<Single />}/>
              
      </Routes>
    </Router>
  );
}

export default App;
