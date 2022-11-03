import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="email" className="registerInput" placeholder="Enter username..."/>

            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter email address..."/>
            
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter password..."/>
            <button className="registerBtn">Register</button>
        </form>
        <button className="registerLoginBtn"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
    </div>
  )
}
