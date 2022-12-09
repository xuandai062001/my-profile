import React, { useState } from 'react';
import styles from '../mystyle.module.css'; 
import MyProfile from './MyProfile';
import MyProject from './MyProject';

const Navbar = () => {
const [navbar, setNavbar] = useState("my_profile");
const checkNavbarValue = () => {
   
    if(navbar === "my_profile"){
        return <MyProfile />
    }
    else if(navbar === "my_project"){
        return <MyProject />
    }
}
  return (
    <div className='header-container'>
        <ul>
            <li onClick={() => setNavbar("my_profile")}>My Profile</li>
            <li onClick={() => setNavbar("my_project")}>My Profile</li>
        </ul>

        {checkNavbarValue()}
    </div>
  )
}

export default Navbar