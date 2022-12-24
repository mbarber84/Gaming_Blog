import "./post.css";
import { Link } from "react-router-dom";
//This code is a React component that displays a post. It takes in a post object as a prop and uses it to render the post's information. It first checks if the post has an associated photo, and if so, it renders an image tag with the source set to the localhost URL plus the photo name. It then renders a div containing the categories of the post, a link to the post page, and the date of creation. Finally, it renders a paragraph containing the description of the post.

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo}
          alt="messy gaming desk"
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>{" "}
        {/*to style date correctly*/}
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
