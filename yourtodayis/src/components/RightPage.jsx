import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RightPage() {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [message, setMessage] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchDiaryEntries();
  }, []);

  const fetchDiaryEntries = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/diary');
      setDiaryEntries(response.data);
    } catch (error) {
      console.error('Failed to fetch diary entries:', error);
    }
  };

  const handleSaveDiary = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/diary', {
        message: inputText
      });
      setMessage(response.data.message);
      fetchDiaryEntries(); // 데이터 갱신
    } catch (error) {
      console.error('Failed to save diary:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h1>일기 목록</h1>
      <ul>
        {diaryEntries.map(entry => (
          <li key={entry.id}>{entry.message}</li>
        ))}
      </ul>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSaveDiary}>일기 저장</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RightPage;