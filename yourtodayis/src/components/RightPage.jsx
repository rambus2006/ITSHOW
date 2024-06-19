import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RightPage.module.css'

const DiaryList = ({ diaries }) => {
  return (
    <div className='list'>
      <ul className='li' >
        
        {diaries.map((entry, idx) => (

        <li key={entry.id} style={{top: ((idx + 1) * 200) + "px"}}>
          
          <p>{entry.message}</p>
          <p>{entry.createdAt}</p>
          <p>{entry.writer}</p>
          {/* <p>{entry.email}</p> */}
        </li>
      ))} 

      </ul>
    </div>
  );
};

export default DiaryList;
