import { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./singlePost.css";
import { useState } from "react";
import {Link} from "react-router-dom"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; /*the 2 in the array is due to the unique post id being third*/
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost()
  },[path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
          className="singlePostImg"
          src={post.photo}
          alt="hand holding controller"
        />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className = "link">
            <b>{post.username}</b>
            </Link>
            
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
