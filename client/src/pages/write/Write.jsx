import { useState } from "react";
import "./write.css";
import axios from "axios"; // Axios is a JavaScript library used for making HTTP requests from the browser. It is a promise-based library that works both in the browser and in Node.js. Axios provides a single API for dealing with both XHR in the browser and Node's HTTP interface. It supports all modern browsers, including support for IE8 and higher. Axios allows you to make both GET and POST requests, as well as providing built-in support for headers, timeouts, interceptors, and automatic transforms for JSON data.
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Write() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post("/upload", data);
      }catch(err){}
    }
    try{
    const res = await axios.post("/posts", newPost);
    window.location.replace("/post/" + res.data._id);
    }catch(err){}
  };

  return (
    <div className='write'>
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
          <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell us your story...." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
          </div>
          <button className="writeSubmit" type="submit">Post</button>
        </form>
    </div>
  )
}
