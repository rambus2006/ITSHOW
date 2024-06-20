import React from 'react';
import style from './Polaroid.module.css';

//이미지 카드를 만들어주는 컴포넌트 
const Polaroid = ({ imageUrl, date, description }) => {
  return (
    <div className={style.card}>
      <img src={imageUrl} alt={description} className={style.cardImgTop} />
      <div className={style.cardBody}>
        <h5 className={style.cardTitle}>{description}</h5>
        <p className={style.cardText}>{date}</p>
      </div>
    </div>
  );
};

export default Polaroid;
