import React, { useState } from 'react';
import styles from '../mystyle.module.css'; 
import MyProfile from './MyProfile';
import MyProject from './MyProject';
import logo from '../assets/images/logo.png';

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
    <div >
        <div className={styles.navbar}>
            <div className={styles.logo} onClick={() => setNavbar("my_profile")}>
            <img src={logo} alt="Logo" />
            </div>
            <div className={styles.intro_text}>
                <div class={styles.typewriter}>I'm Front end Developer</div>
            </div>
            <ul>
                <li style={{border: navbar === "my_profile" ? '1px solid red' : '', color: navbar === "my_profile" ? 'red' : '',}} onClick={() => setNavbar("my_profile")}>My Profile</li>
                <li style={{border: navbar === "my_project" ? '1px solid red' : '', color: navbar === "my_project" ? 'red' : '',}}  onClick={() => setNavbar("my_project")}>My Project</li>
            </ul>
        </div>
        

        {checkNavbarValue()}
    </div>
  )
}

export default Navbar