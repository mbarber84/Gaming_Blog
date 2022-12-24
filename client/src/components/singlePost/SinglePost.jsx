import { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./singlePost.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
//This code is a React component that displays a single post. It uses the useLocation hook to get the pathname of the post, which is used to make an API call to get the post data. The post data is then stored in state and used to populate the page with information about the post, such as its title, description, author, and date created. The user can also delete or update the post if they are logged in as the author of the post. The code also includes logic for displaying an input field for updating or deleting a post when clicked on.

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; /*the 2 in the array is due to the unique post id being third*/
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path); //post id
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  },[path]); // This code is using the React Hooks useEffect to make an asynchronous call to an API endpoint. The endpoint is "/posts/" + path, where path is a variable that contains the post id. The response from the API call is stored in the res variable and then used to set the post, title, and description variables. The useEffect hook will run every time the path variable changes.

  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${post._id}`, {
        data: {username:user.username}}); //post id
      window.location.replace("/");
    }catch(err){}
  }; // This code is a function that handles the deletion of a post. It uses the axios library to make an asynchronous delete request to the server, passing in the post ID and the username of the user making the request. If successful, it will redirect the user to the homepage. If there is an error, it will do nothing.

  const handleUpdate = async()=>{
    try{
      await axios.put(`/posts/${post._id}`, {
        username:user.username, title,desc,}); //post id
      setUpdateMode(false); //or window.location.reload("/");
    }catch(err){}
  }; //This code is an asynchronous function that handles an update to a post. It uses the axios library to make a PUT request to the server, passing in the post ID, username, title, and description. If the request is successful, it sets the update mode to false or reloads the page. If there is an error, it will catch it and do nothing.

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
          className="singlePostImg"
          src={PF + post.photo}
          alt="hand holding controller"
        />
        )}
        {
          updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (
        <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i> {/** Edit button*/}
            <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i> {/** Delete button*/}
          </div>
          )}
        </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className = "link">
            <b>{post.username}</b>
            </Link>
            
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> : (
        <p className="singlePostDesc">
          {desc}
        </p>
        )}
        {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>Update Post</button>
        )}
      </div>
    </div>
  );
}
// This code is a React component that renders a single post. It displays the post's title, author, date created, and description. It also includes two icons for editing and deleting the post if the user is the author of the post. If the user is not the author, only the title, author, date created, and description are displayed. The code also includes an input field and text area for updating the title and description of the post if updateMode is set to true. Finally, it includes a button to submit any changes made to the post when updateMode is set to true.


