import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder="Enter email address..."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter password..."/>
            <button className="loginBtn">Login</button>
        </form>
        <button className="loginRegisterBtn"><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link></button>
        
    </div>
  )
}
