import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { useState } from "react";
import axios from "axios";


export default function Setting() {
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success,setSuccess] = useState(false);

  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/" //PF is short for public folder
 
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updatedUser = {
      userId:user._id,
      username, email, password,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePicture = filename;
      try{
        await axios.post("/upload", data);
      }catch(err){}
    }
    try{
    const res = await axios.put("/users/" + user._id, updatedUser); //user id added here as it is required on the users.js page
    setSuccess(true);
    dispatch({type:"UPDATE_SUCCESS", payload: res.data});
    }catch(err){dispatch({type:"UPDATE_FAILURE"})}
  };

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
                <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt=" " /> {/**file to use the loaded picture for your profile */}
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
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
