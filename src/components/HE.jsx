import React from 'react';
import AdSense from 'react-adsense';

const HE = () => {
  return (
    <div>
      <AdSense.Google
        client='ca-pub-9677892204769800' // 여기에 실제 퍼블리셔 ID를 입력하세요.
        slot='4693054575' // 여기에 실제 광고 슬롯 ID를 입력하세요.
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
    </div>
  );
};

export default HE;