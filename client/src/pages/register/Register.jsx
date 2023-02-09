import axios from "axios"; //Axios is a JavaScript library used for making HTTP requests from the browser. It is a promise-based library that works both in the browser and in Node.js. Axios provides a single API for dealing with both XHR in the browser and Node's HTTP interface. It supports all modern browsers, including support for IE8 and higher. Axios allows you to make both GET and POST requests, as well as providing built-in support for headers, timeouts, interceptors, and automatic transforms for JSON data.
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

//This code is a React component that renders a form for registering a new user. It uses the useState hook to store the username, email, and password entered by the user. The handleSubmit function is called when the form is submitted and it sends an HTTP POST request to the server with the username, email, and password. If successful, it redirects to the login page. If there is an error, it sets an error state which displays an error message.

export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false); 
  //This code is a function called Register that is using the React Hooks useState to create state variables. The function is setting the initial values of the state variables to an empty string. It also has a state variable called error which is set to false. This function will be used for registering a user and will likely have other code that will update the values of the state variables when a user enters their information and submit it. The error variable will be used to display any errors that occur during registration.

  const handleSubmit = async (e)=>{
    e.preventDefault();//stops page refreshing when button is clicked
    setError(false);
    try{
    const res = await axios.post("/auth/register", {
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login")
  }catch(err){
    setError(true);
  }
  };
  //This code is a function that handles the submission of a form. It uses the axios library to make a POST request to the '/auth/register' endpoint with the username, email, and password from the form. If the request is successful, it redirects to the '/login' page. If there is an error, it sets an error state to true.

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter username..."
            onChange={e=>setUsername(e.target.value)}/>
            {/** This code is written in React.js and is part of a component that renders a form for registering a user. The code creates an HTML div element with the class name "register" and contains a span element with the text "Register" and a form element with the class name "registerForm". The form has an onSubmit event handler that calls the handleSubmit function when the form is submitted. The code also creates an input element of type "text" with the class name "registerInput" and a placeholder text of "Enter username...". The input also has an onChange event handler that calls the setUsername function when the value of the input changes, passing in the value of the input as an argument. */}

            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter email address..."
            onChange={e=>setEmail(e.target.value)}/>
            
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter password..."
            onChange={e=>setPassword(e.target.value)}/>
            <button className="registerBtn" type="submit">Register</button>
        </form>
        <button className="registerLoginBtn"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
        {error && <span style={{color:"red", marginTop:"15px", fontSize:"25px"}}>Oops something went wrong! check your details are correct.</span>}
    </div>
  )
}
