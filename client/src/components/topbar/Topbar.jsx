
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/" //PF is short for public folder

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
  }

  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-github"></i>
        </div>

        <div className="topCentre">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className="link" style={{textDecoration:"none", color:"inherit"}}>Home</Link></li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contacts</li>
                <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "logout"}</li>{/*if there is a user display logout*/}
            </ul>
        </div>

        <div className="topRight">
          {
            user ? (
              <Link to="/setting"><img className="topImg" src={PF + user.profilePicture} alt="" /></Link>
            ) :(
              <ul className="topList">
                <li className="topListItem"><Link to="/login" className="link" style={{textDecoration:"none", color:"inherit"}}>Login</Link></li>
                <li className="topListItem"><Link to="/register" className="link" style={{textDecoration:"none", color:"inherit"}}>Register</Link></li></ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
