import React, { useState } from 'react'; // useState를 React에서 가져옵니다.
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS 파일 포함

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState('https://i.pinimg.com/236x/0f/02/c8/0f02c8c4ccfd3d85e39dbf25aca6ac9c.jpg');

  const handleChangePicture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoBack = () => {
    // 여기에 이전 화면으로 이동하는 로직을 추가하세요.
    // 예를 들어, react-router-dom을 사용한다면 history.goBack()을 호출할 수 있습니다.
    console.log('이전 화면으로 이동');
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-picture-input"
          onChange={handleChangePicture}
        />
        <div className="profile-picture-wrapper">
          <img
            src={profilePicture}
            alt="프로필"
            className="profile-picture"
            onClick={() => document.getElementById('profile-picture-input').click()}
          />
          <button className="go-back-button" onClick={handleGoBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <h2>너와 나의 일기</h2><br></br>
        <h3>D + 100</h3>
        <div className="date"><h4>{getCurrentDate()}</h4></div>
      </div>
    </div>
  );
};

export default Sidebar;
