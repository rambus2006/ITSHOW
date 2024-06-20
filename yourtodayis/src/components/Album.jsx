import React, { useState, useRef } from 'react';
import style from './Album.module.css'; // Assuming album.css is in the same folder as the component
import BackgroundComponent from './BackgroundComponent2';
import Polaroid from './Polaroid';
import { FaHome } from "react-icons/fa";

import r1 from './img/r1.jpg';
import r2 from './img/r2.jpg';
import r3 from './img/r3.jpg'; // Ensure different images for r3
import r4 from './img/r4.png'; // Ensure different images for r3
import r5 from './img/r5.jpg'
import r6 from './img/r6.jpg'
import r7 from './img/r7.jpg'
import r8 from './img/r8.jpg'
const Album = () => {
  const [picture, setPicture] = useState(null); // State to store uploaded picture
  const inputRef = useRef(null); // Ref to access file input element

  const gotohome = () => {
    // Add logic to navigate to the previous screen
    window.location.href="http://localhost:3000/Home"
  };

  const handleChangePicture = () => {
    const file = inputRef.current.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPicture(reader.result); // Set the uploaded picture to state
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handlePolaroidClick = () => {
    inputRef.current.click(); // Trigger click event on the file input
  };

  return (
    <div>
      <FaHome className={style.home} onClick={gotohome}/>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.r1}>
            <Polaroid
              imageUrl={r1}
              title="Uploaded Image"
              description="2022-05-19"
            />
          </div>
          <div className={style.r2}>
            <Polaroid
              imageUrl={r2}
              title="Example Image 2"
              description="2022-08-28"
            />
          </div>
          <div className={style.r3}>
            <Polaroid
              imageUrl={r6}
              title="Example Image 3"
              description="2023-09-13"
            />
          </div>
          <div className={style.r4}>
          <input type="file" accept="image/*" className={style.fileinput} ref={inputRef} onChange={handleChangePicture} style={{ display: 'none' }} />
          <div onClick={handlePolaroidClick}>
            <Polaroid 
              imageUrl={picture || r4}
              title="Example Image 4"
              description="2024-06-21"
            />
            </div>
          </div>
        </div>
        <div className={style.row2}>
          <div className={style.r5}>
            <Polaroid
              imageUrl={r5}
              title="Example Image 5"
              description="2022-06-23"
            />
          </div>
          <div className={style.r6}>

            <Polaroid
              imageUrl={r7}
              title="Example Image 6"
              description="2023-07-04"
            />
          </div>
          <div className={style.r7}>
            {/* Hidden file input */}
            {/* <input type="file" accept="image/*" className={style.fileinput} ref={inputRef} onChange={handleChangePicture} style={{ display: 'none' }} /> */}
            <div onClick={handlePolaroidClick}>
              <Polaroid
                imageUrl={r8}
                title="Example Image 7"
                description="2024-01-31"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.line}>
        <svg width="100%" height="1200">
          <path className={style.wave} d="
            M0,500 
            C100,1000 200,1000 300,500
            S500,900 800,1000
            S1100,550 1100,500 
            S500,800 3800,800
          " />
        </svg>
      </div>
      <BackgroundComponent />
    </div>
  );
}

export default Album;
