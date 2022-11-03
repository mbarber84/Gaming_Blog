import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImg" src="https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Man playing old game" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore non ducimus officiis sit voluptatem aliquid? Obcaecati consectetur nulla recusandae incidunt laboriosam explicabo, blanditiis deleniti sequi, ratione, officiis consequuntur facere?
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Games</li>
                <li className="sidebarListItem">Action</li>
                <li className="sidebarListItem">Puzzle</li>
                <li className="sidebarListItem">MMORPG</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">War Games</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                </div>
        </div>
    </div>
  )
}
