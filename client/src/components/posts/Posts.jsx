import Post from "../post/Post";
import "./posts.css";
// This code is a function called Posts which takes in an argument of posts. It returns a div with the class name 'posts' and maps through the posts argument, creating a Post component for each post.

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
