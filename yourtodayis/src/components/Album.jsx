import React from 'react';
import style from './Album.module.css'; // Assuming album.css is in the same folder as the component
import BackgroundComponent from './BackgroundComponent2'
import r1 from './img/r1.jpg'
import r2 from './img/r2.jpg' // Assume another image
import r3 from './img/r2.jpg' // Assume another image
import Polaroid from './Polaroid';
import { FaHome } from "react-icons/fa";


const Album = () => {
  const tohome = () => {
    // console.log('출력')
    window.location.href="http://localhost:3000/Home"
  };
    return (
      <div>
          <FaHome className={style.fahome} onClick={tohome}/>
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
          <div className={style.container}>
            <div className={style.row}>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r1}
                  title="Example Image 1"
                  description="This is an example description for Image 1."
                />
              </div>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r2}
                  title="Example Image 2"
                  description="This is an example description for Image 2."
                />
              </div>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r3}
                  title="Example Image 3"
                  description="This is an example description for Image 3."
                />
              </div>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r1}
                  title="Example Image 3"
                  description="This is an example description for Image 3."
                />
              </div>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r2}
                  title="Example Image 3"
                  description="This is an example description for Image 3."
                />
              </div>
              <div className="col-md-2">
                <Polaroid
                  imageUrl={r3}
                  title="Example Image 3"
                  description="This is an example description for Image 3."
                />
              </div>
            </div>
          </div>
          <BackgroundComponent/>

      </div>
      
    );
}

export default Album;
