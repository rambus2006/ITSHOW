// App.jsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000/api/diary');

const GetAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('update', (newData) => {
      setData(newData);
    });

    return () => {
      socket.off('update');
    };
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAPI;
