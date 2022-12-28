import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
//Axios is a JavaScript library used for making HTTP requests from the browser. It is a promise-based library that works both in the browser and in Node.js. Axios provides a single API for dealing with both XHR in the browser and Node's HTTP interface. It supports all modern browsers, including support for IE8 and higher. Axios allows you to make both GET and POST requests, as well as providing built-in support for headers, timeouts, interceptors, and automatic transforms for JSON data.
import { useLocation } from "react-router-dom";
//This code is a React functional component that is responsible for displaying the home page of an application. It uses the useState and useEffect hooks to fetch posts from an API endpoint and store them in the posts state variable. The search parameter from the URL is used to filter the results. The component then renders a Header, Posts, and Sidebar components.

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]); //This code is using the React Hook useEffect to fetch posts from an API. The useEffect hook is called with an anonymous function that contains an async function, fetchPosts. This async function uses axios to make a GET request to the '/posts' endpoint with the search query parameter. The response data is then set to the posts state variable using the setPosts function. The useEffect hook is also passed a second argument, [search], which tells React to re-run this effect whenever the search variable changes.

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
} // It returns a React fragment containing a Header component, a div with the class name "home", a Posts component with the posts prop, and a Sidebar component. The Posts component will render the posts that are passed in as props.
