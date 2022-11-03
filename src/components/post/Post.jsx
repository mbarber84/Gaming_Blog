import "./post.css"

export default function post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="messy gaming desk" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">MMORPG</span>
                <span className="postCat">War Games</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor consectetur.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quisquam, error nam, fuga qui necessitatibus repellendus eaque soluta at quaerat unde eius odio quidem veniam possimus tenetur velit facilis rerum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quisquam, error nam, fuga qui necessitatibus repellendus eaque soluta at quaerat unde eius odio quidem veniam possimus tenetur velit facilis rerum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quisquam, error nam, fuga qui necessitatibus repellendus eaque soluta at quaerat unde eius odio quidem veniam possimus tenetur velit facilis rerum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quisquam, error nam, fuga qui necessitatibus repellendus eaque soluta at quaerat unde eius odio quidem veniam possimus tenetur velit facilis rerum!
        </p>
    </div>
  )
}
