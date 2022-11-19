
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar/>
      <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route path="/register" element={user ? <Register /> :<Home/>}/>{/*if user is registered direct to home page otherwise register*/}
               
          <Route path="/login" element={user ? <Login /> :<Home/>}/>{/*if user is login in start at home page*/}
             
          <Route path="/write" element={user ? <Write/> :<Register />}/>{/*if user wants to write they must be registered*/}
              
          <Route path="/setting" element={user ? <Register /> :<Setting/>}/> {/*to change settling user must be registered*/}
            
          <Route path="/post/:postId" element={<Single />}/>
              
      </Routes>
    </Router>
  );
}

export default App;
