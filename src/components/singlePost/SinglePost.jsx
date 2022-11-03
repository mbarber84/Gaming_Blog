import "./singlePost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/4056883/pexels-photo-4056883.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="hand holding controller" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet!
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Mathew</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio nemo ullam voluptates. Amet esse veritatis, deleniti sapiente voluptate beatae at quisquam inventore, harum reprehenderit obcaecati pariatur repudiandae! Asperiores, provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio nemo ullam voluptates. Amet esse veritatis, deleniti sapiente voluptate beatae at quisquam inventore, harum reprehenderit obcaecati pariatur repudiandae! Asperiores, provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio nemo ullam voluptates. Amet esse veritatis, deleniti sapiente voluptate beatae at quisquam inventore, harum reprehenderit obcaecati pariatur repudiandae! Asperiores, provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio nemo ullam voluptates. Amet esse veritatis, deleniti sapiente voluptate beatae at quisquam inventore, harum reprehenderit obcaecati pariatur repudiandae! Asperiores, provident!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio nemo ullam voluptates. Amet esse veritatis, deleniti sapiente voluptate beatae at quisquam inventore, harum reprehenderit obcaecati pariatur repudiandae! Asperiores, provident!
        </p>
      </div>
    </div>
  )
}
