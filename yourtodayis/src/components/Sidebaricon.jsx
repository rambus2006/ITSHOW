import React, { useState } from 'react';
import './Sidebaricon.css'; // CSS 스타일을 포함하는 파일

function Sidebaricon() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="center">
      <input 
        type="checkbox" 
        id="menuicon" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
      />
      <label htmlFor="menuicon">
        <span className={isChecked ? 'top' : ''}></span>
        <span className={isChecked ? 'middle' : ''}></span>
        <span className={isChecked ? 'bottom' : ''}></span>
      </label>
    </div>
  );
}

export default Sidebaricon;