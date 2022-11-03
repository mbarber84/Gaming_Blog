import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src="https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" 5 soldiers with rifles " />
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Mathew"/>
            <label>Email</label>
            <input type="email" placeholder="mathew@emailaddress.co.uk"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
        </form>
        </div>
        <Sidebar/>
    </div>
  )
}
