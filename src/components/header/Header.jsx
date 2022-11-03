import "./header.css"

export default function () {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Gaming Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Gaming Console Switch" />
    </div>
  )
}
