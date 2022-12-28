import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";


//This code is a React component that handles user login. It uses the useRef hook to store references to the username and password inputs, and the useContext hook to access the dispatch function from the Context object. The handleSubmit function is called when the form is submitted, and it dispatches an action of type "LOGIN_START" before making an API call to authenticate the user. If successful, it dispatches an action of type "LOGIN_SUCCESS" with the response data as payload. If unsuccessful, it dispatches an action of type "LOGIN_FAILURE". The component also contains a link to a register page.

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context) //This code is a function called Login that is using the React Hooks useRef and useContext. The useRef hook is used to create references to DOM elements, which can be used to access their values. In this case, two references are created for the user and password fields. The useContext hook is used to access data from the Context object, which contains a dispatch function and an isFetching boolean. The dispatch function can be used to send data from the Login component to other components in the application, while the isFetching boolean can be used to indicate whether or not a request is currently being processed.

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  }; //This code is a function that handles a form submission. It uses the preventDefault() method to prevent the default action of the form from occurring. It then dispatches an action with type "LOGIN_START" to indicate that the login process has started. It then makes an asynchronous request using axios to send a post request with the username and password from the form fields. If the request is successful, it dispatches an action with type "LOGIN_SUCCESS" and payload of the response data. If there is an error, it dispatches an action with type "LOGIN_FAILURE".

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Username..."
          ref={userRef}
        /> {{/* This code is creating a login form with a username input field. The div with the className "login" is the container for the form. The span with the className "loginTitle" is displaying the text "Login". The form has an onSubmit event handler that calls a function called handleSubmit when it is submitted. Inside of the form there is an input field of type text with a className of "loginInput" and a placeholder of "Enter Username...". This input field also has a reference to a variable called userRef.*/}}
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter password..."
          ref={passwordRef}
        />
        <button className="loginBtn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterBtn">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Register
        </Link>
      </button>
    </div>
  );
}
