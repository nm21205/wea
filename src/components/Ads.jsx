import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Ads = () => {
    useEffect(() => {
        const handleAds = () => {
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        };

        // 스크립트가 로드된 후에 handleAds를 호출합니다.
        if (window.adsbygoogle) {
            handleAds();
        } else {
            window.addEventListener('load', handleAds);
        }

        return () => {
            window.removeEventListener('load', handleAds);
        };
    }, []);

    return (
        <div>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9677892204769800" crossOrigin="anonymous"></script>
                <meta name="google-adsense-account" content="ca-pub-9677892204769800" />
            </Helmet>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9677892204769800"
                data-ad-slot="4693054575" // 여기에 실제 광고 슬롯 ID를 입력하세요.
                data-ad-format="auto"></ins>
        </div>
    );
};

export default Ads;