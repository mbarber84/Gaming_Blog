import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
// This code is a React component that renders the topbar of a website. It uses the useContext hook to access the user data from the Context object. The PF variable is a string that points to the public folder where images are stored. The handleLogout function dispatches an action to log out the user. The return statement renders a div with three sections: topLeft, topCentre, and topRight. The topLeft section contains icons for social media links, while the topCentre section contains links for Home, About, Contacts, and Write. If there is a user logged in, it will display "logout" in the list; otherwise it will display "Login" and "Register". Finally, the topRight section displays either an image of the user's profile picture or two links for logging in or registering.

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"; //PF is short for public folder

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }; // This code is a function called Topbar that is exported as the default. It uses the useContext hook to access the user and dispatch from the Context. The PF variable is set to a localhost URL which is short for public folder. The handleLogout function dispatches an action of type LOGOUT when it is called.

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-github"></i>
      </div>

      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link
              to="/"
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contacts</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "logout"}
          </li>
          {/*if there is a user display logout*/}
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={PF + user.profilePicture} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/login"
                className="link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to="/register"
                className="link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
