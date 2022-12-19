import { useState } from "react"
import "./write.css"

export default function Write() {
  const [title,setTitle] = useState("")
  const [desc,setdesc] = useState("")
  return (
    <div className='write'>
        <form className="writeForm">
          <img className="writeImg" src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="PlayStation controller" />
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell us your story...." type="text" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Post</button>
        </form>
    </div>
  )
}
