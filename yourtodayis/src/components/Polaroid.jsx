import React from 'react';
import style from './Polaroid.module.css';

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
