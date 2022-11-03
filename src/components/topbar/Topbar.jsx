
import { Link } from "react-router-dom";
import "./topbar.css";



export default function Topbar() {
  const user = false;
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
                <li className="topListItem">{user && "logout"}</li>{/*if there is a user display logout*/}
            </ul>
        </div>

        <div className="topRight">
          {
            user ? (
              <img className="topImg" src="https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" 5 soldiers with rifles " />
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
