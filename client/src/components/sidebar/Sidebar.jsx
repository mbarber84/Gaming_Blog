import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./sidebar.css";
//This code is a React component that renders a sidebar. It uses the useState and useEffect hooks to fetch data from an API endpoint and store it in the cats state variable. The sidebar contains three sections: About Me, Categories, and Follow Us. The About Me section contains an image and some text. The Categories section displays a list of categories fetched from the API endpoint. Finally, the Follow Us section displays social media icons.

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])

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
                {cats.map((c) =>(
                    <Link to={`/?cat=${c.name}`} className = "link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}  
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
