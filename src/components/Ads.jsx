import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Ads = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9677892204769800';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (window.adsbygoogle && window.adsbygoogle.loaded) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <div>
            <Helmet>
                <meta name="google-adsense-account" content="ca-pub-9677892204769800" />
            </Helmet>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9677892204769800"
                data-ad-slot="YOUR_ACTUAL_AD_SLOT_ID" // 여기에 실제 광고 슬롯 ID를 입력하세요.
                data-ad-format="auto"></ins>
        </div>
    );
};

export default Ads;