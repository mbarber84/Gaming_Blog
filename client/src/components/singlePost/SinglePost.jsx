import { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./singlePost.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

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
  },[path]);

  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${post._id}`, {
        data: {username:user.username}}); //post id
      window.location.replace("/");
    }catch(err){}
  };

  const handleUpdate = async()=>{
    try{
      await axios.put(`/posts/${post._id}`, {
        username:user.username, title,desc,}); //post id
      window.location.reload("/");
    }catch(err){}
  };

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
          {post.title}
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
          {post.desc}
        </p>
        )}
        {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>Update Post</button>
        )}
      </div>
    </div>
  );
}
