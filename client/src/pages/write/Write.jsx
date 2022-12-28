import { useState } from "react";
import "./write.css";
import axios from "axios"; // Axios is a JavaScript library used for making HTTP requests from the browser. It is a promise-based library that works both in the browser and in Node.js. Axios provides a single API for dealing with both XHR in the browser and Node's HTTP interface. It supports all modern browsers, including support for IE8 and higher. Axios allows you to make both GET and POST requests, as well as providing built-in support for headers, timeouts, interceptors, and automatic transforms for JSON data.
import { useContext } from "react";
import { Context } from "../../context/Context";

//This code is a React component that allows a user to write a post. It uses the useState and useContext hooks to store the title, description, file, and user information. The handleSubmit function is called when the form is submitted and it sends an axios request to create a new post with the title, description, and photo (if one was uploaded). Finally, it redirects the user to the page for their new post.

export default function Write() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context); // This code is a function called Write that is using the React Hooks useState and useContext. The useState hook allows the function to keep track of the state of certain variables, such as title, desc, and file. The useContext hook allows the function to access data from the Context object. In this case, it is accessing the user data from the Context object. This data can then be used in other parts of the application.

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    }; //  This code is a function that handles a form submission. The function takes an event (e) as an argument and prevents the default action of the event from occurring. It then creates a new object called newPost which contains the username, title, and description of the post.
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
  }; //This code is creating a new post and uploading a file associated with it. It first checks if there is a file, then creates a new FormData object and assigns it the current date and the name of the file. It then appends the name and file to the data object, assigns the filename to the photo property of newPost, and tries to post it to an upload endpoint. Finally, it tries to post the newPost object to a posts endpoint and redirects to a page with the id of the newly created post.

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
