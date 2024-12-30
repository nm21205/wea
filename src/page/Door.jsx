// src/page/Door.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WiDaySunny } from 'react-icons/wi'; // 날씨 관련 아이콘 import
import styled from 'styled-components';

import Ads from '../components/Ads';

const DoorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  cursor: pointer; // 클릭 가능하도록 설정
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color:white; // 배경색 변경
  }
`;

const Icon = styled(WiDaySunny)`
  width: 300px;
  height: 300px;
  color: #f39c12;

  &:hover {
    color: white; // 아이콘 색상 변경
  }
`;

const Door = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/homepage'); // '/homepage' 경로로 이동
  };

  return (
    <>
      <DoorContainer onClick={handleClick}>
        <Icon />
        <h1>Local weather info</h1> {/* 제목 변경 */}
      </DoorContainer>
      <Ads />
    </>
  );
};

export default Door;