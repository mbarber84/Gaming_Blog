import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";

// This code is a function called Single() that is exported as the default. It returns a div with the className "single" which contains two components, SinglePost and Sidebar. This function will be used to render the SinglePost and Sidebar components on the page.

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
