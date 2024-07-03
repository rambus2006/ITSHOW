import React, { useState } from 'react'; // React에서 useState를 가져옵니다.
import style from './Sidebar.module.css'; // Sidebar 모듈의 CSS 스타일을 가져옵니다.
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS 파일 포함
import { FaHome } from "react-icons/fa"; // React Icons에서 FaHome 아이콘을 가져옵니다.

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState('https://i.pinimg.com/236x/0f/02/c8/0f02c8c4ccfd3d85e39dbf25aca6ac9c.jpg'); // 프로필 사진 URL을 상태로 관리
  const [isChecked, setIsChecked] = useState(false); // 체크박스의 체크 여부를 상태로 관리

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 체크박스 상태를 반전시킵니다.
  };
  
  const handleChangePicture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result); // 파일을 읽어서 프로필 사진을 변경합니다.
      };
      reader.readAsDataURL(file);
    }
  };

  const tohome = () => {
    // 홈으로 이동하는 함수
    window.location.href="http://localhost:3000/Home";
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // 현재 날짜를 YYYY-MM-DD 형식으로 반환합니다.
  };

  return (
    <div className={style.sidebar}>
      <div className={style.center}>
        {/* 메뉴 아이콘 체크박스 */}
        <input 
          type="checkbox" 
          id="menuicon" 
          checked={isChecked} 
          onChange={handleCheckboxChange}
        />
      </div>
      {/* 홈 아이콘 */}
      <FaHome className={style.fahome} onClick={tohome} />

      <div className={style.profile}>
        {/* 프로필 사진 */}
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-picture-input"
          onChange={handleChangePicture}
        />
        <div className={style.profilepicturewrapper}>
          <img
            src={profilePicture}
            alt="프로필"
            className={style.profilepicture}
            onClick={() => document.getElementById('profile-picture-input').click()}
          />
        </div>
        <h2>너와 나의 일기</h2><br></br>
        <h3>D + 456</h3>
        <div className={style.date}><h4>{getCurrentDate()}</h4></div>
      </div>
    </div>
  );
};

export default Sidebar;
