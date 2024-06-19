import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState('https://i.pinimg.com/236x/0f/02/c8/0f02c8c4ccfd3d85e39dbf25aca6ac9c.jpg');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    // 이전 페이지로 이동하는 로직
    console.log('이전 페이지로 이동');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
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
        </div>
        <button className="go-back-button" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i> 뒤로 가기
        </button>
        <h2>너와 나의 일기</h2>
        <h3>D + 100</h3>
        <div className="date"><h4>{getCurrentDate()}</h4></div>
      </div>
    </div>
  );
};

export default Sidebar;
