import styles from '../css/myprofile.module.css'; 
import avatar from '../assets/images/avatar.png'
import { my_infor, my_skill } from '../assets/content';
import { useState } from 'react';

const FrontEnd = () => {
  const [my_skill_styles, setMy_skill_styles] = useState({});
  setTimeout(() =>{
  setMy_skill_styles(my_skill);
  }, 200);

  return (
    <div>
      <div className={styles.item}>
          <div className={styles.label}><span>Html</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.font_end ? my_skill_styles.font_end.html : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>Css</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.font_end ? my_skill_styles.font_end.css : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>javascript</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.font_end ? my_skill_styles.font_end.javascript : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>React Native</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.font_end ? my_skill_styles.font_end.reactJs : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>React Js</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.font_end ? my_skill_styles.font_end.reactNative : "0%"}}></div>
          </div>
        </div>
    </div>
  )
}

const BackEnd = () => {
  const [my_skill_styles, setMy_skill_styles] = useState({});
  setTimeout(() =>{
  setMy_skill_styles(my_skill);
  }, 200);

  return (
    <div>
      <div className={styles.item}>
          <div className={styles.label}><span>Php</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.back_end ? my_skill_styles.back_end.php : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>Wordpress</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.back_end ? my_skill_styles.back_end.wordpress : "0%"}}></div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}><span>Magento</span></div>
          <div className={styles.progress_bar}>
            <div className={styles.progressScore} style={{width: my_skill_styles.back_end ? my_skill_styles.back_end.magento : "0%"}}></div>
          </div>
        </div>

    </div>
  )
}

const MySkill = () => {
  const [skill, setSkill] = useState("front_end");

  const checkSkillValue = () => {
   
    if(skill === "front_end"){
        return <FrontEnd />
    }
    else if(skill === "back_end"){
      return <BackEnd />
    }
}

  return (
    <div className={styles.my_skills}>
      <h1>My Skills</h1>
      <div>
        <button onClick={() => setSkill("front_end")}>Front End</button>
        <button onClick={() => setSkill("back_end")}>Back End</button>
      </div>
     
      {checkSkillValue()}
    </div>
  )
}

const MyProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.leftContent}>
        <div className={styles.avatar}>
            <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles.infor}>
          <h1>My Information</h1>
          <div className={styles.item}><span className={styles.label}>Name :</span> <span>{my_infor.fullName}</span></div>
          <div className={styles.item}><span className={styles.label}>NickName :</span> <span>{my_infor.nickName}</span></div>
          <div className={styles.item}><span className={styles.label}>Phone Number :</span> <span>{my_infor.phoneNumber}</span></div>
          <div className={styles.item}><span className={styles.label}>College :</span> <span>{my_infor.University}</span></div>
          <div className={styles.item}>
            <a href={my_infor.facebookLink}><i class="fa-brands fa-facebook"></i></a>
            <a href={my_infor.facebookLink}><i class="fa-brands fa-instagram"></i></a>
            <a href={my_infor.facebookLink}><i class="fa-brands fa-twitter"></i></a>
            <a href={my_infor.facebookLink}><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <MySkill />
      </div>
    </div>
  )
}

export default MyProfile