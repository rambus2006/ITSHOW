import React from 'react';
import './RightPage.module.css'

const DiaryList = ({ diaries }) => {
  return (
    <div className='list'>
      <ul className='li' >
        
        {diaries.map((entry, idx) => (

        <li key={entry.id} style={{top: ((idx + 1) * 200) + "px"}}>
          
          <p>{entry.message}</p>
          <p>{entry.createdAt}</p>
          <p>{entry.writer}로부터 온 일기</p>
          {/* <p>{entry.email}</p> */}
        </li>
      ))} 

      </ul>
    </div>
  );
};

export default DiaryList;
