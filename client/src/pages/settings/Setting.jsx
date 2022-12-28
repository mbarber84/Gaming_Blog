// This code is a React component that allows users to update their account settings. It uses the useState and useContext hooks to store the user's information, such as username, email, and password. The handleSubmit function is used to send a PUT request to the server with the updated user information. The code also includes a profile picture upload feature, which stores the image in a public folder and updates the user's profile picture in the database. Finally, it renders a success message if the update was successful.

import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { useState } from "react";
import axios from "axios"; // Axios is a JavaScript library used for making HTTP requests from the browser. It is a promise-based library that works both in the browser and in Node.js. Axios provides a single API for dealing with both XHR in the browser and Node's HTTP interface. It supports all modern browsers, including support for IE8 and higher. Axios allows you to make both GET and POST requests, as well as providing built-in support for headers, timeouts, interceptors, and automatic transforms for JSON data.


export default function Setting() {
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSuccess] = useState(false); //This code is written in React and is a function called Setting. It uses the useState hook to create state variables for file, username, email, password, and success. The initial values of these variables are set to null, an empty string, and false respectively. These state variables will be used to store user input from a form in the Setting component.

  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/" // This code is using the useContext hook from React to access the Context object. The user and dispatch variables are being set to the values of the user and dispatch properties of the Context object. The PF variable is being set to a string representing a localhost URL with an images directory. PF is short for public folder
 
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updatedUser = {
      userId:user._id,
      username, email, password,
    }; //This code is a function that handles a form submission. It prevents the default action of the form submission (e.preventDefault()), dispatches an action to update the state (dispatch({type:"UPDATE_START"})), and creates an object with the user's id, username, email, and password (const updatedUser = {userId:user._id, username, email, password}). This object will be used to update the user's information in the database.
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePicture = filename; //This code is creating a new FormData object and assigning it to the variable "data". It is then creating a filename based on the current date and the name of the file, and assigning it to the variable "filename". The code then appends the filename to the data object, as well as the file itself. Finally, it assigns this filename to the "profilePicture" property of an updatedUser object.
      try{
        await axios.post("/upload", data);
      }catch(err){}
    } //This code is using the Axios library to make a POST request to the '/upload' endpoint. If the request is successful, nothing will happen. If there is an error, it will be caught in the catch block and handled accordingly.
    try{
    const res = await axios.put("/users/" + user._id, updatedUser); //user id added here as it is required on the users.js page
    setSuccess(true);
    dispatch({type:"UPDATE_SUCCESS", payload: res.data});
    }catch(err){dispatch({type:"UPDATE_FAILURE"})}
  }; // This code is using the axios library to make a PUT request to the '/users/' endpoint with an updated user object. If the request is successful, it sets the success variable to true and dispatches an action of type "UPDATE_SUCCESS" with the response data as its payload. If there is an error, it dispatches an action of type "UPDATE_FAILURE"

  return (
    <div className='settings'>
        <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt=" " /> {/** This code is used to render an image on a webpage. The image source is determined by the value of the variable "file". If the variable "file" has a value, then the image source will be set to URL.createObjectURL(file). If the variable "file" does not have a value, then the image source will be set to PF + user.profilePicture. The alt attribute of the image is set to an empty string. file to use the loaded picture for your profile */}
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/> {{/**This code is an HTML input element that allows a user to select a file from their computer. The input element has an id of "fileInput" and is set to display:none so it is not visible on the page. The onChange event handler is set to call a function called setFile, which takes the first file in the list of files selected by the user (e.target.files[0]). */}}
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}/>
            <button className="settingSubmit" type="submit">Update</button>
            {success && <span style={{color:"green", textAlign:"center", marginTop:"20px", fontSize:"25px"}}>Your details have been updated!</span> }
        </form>
        </div>
        <Sidebar/>
    </div>
  )
}
