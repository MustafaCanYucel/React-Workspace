import React from 'react';
import { useNavigate } from 'react-router-dom';
export const data = [
    {
      id: 0,
      name: "React",
      description: "React açıklama kısmı"
    },
    {
      id: 1,
      name: "Vue",
      description: "Vue açıklama kısmı"
    },
    {
      id: 2,
      name: "Angular",
      description: "Angular açıklama kısmı"
    }
  ];


const Home = () => {
  const navigate = useNavigate(); 

  
  return (
    <div>
      {data.map((dt, index) => (
        <div
          key={index}
          onClick={() => navigate(`/detail/${dt.id}`)}
 
          style={{ cursor: 'pointer', marginBottom: '30px' }} 
        >
          <div>{dt.name}</div>
          <div>{dt.description}</div>
        </div>
      ))}
      <div>Home</div>
    </div>
  );
};

export default Home;
