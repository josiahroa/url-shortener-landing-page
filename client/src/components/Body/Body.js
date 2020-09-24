import React, { useState } from 'react';
import UrlShortener from '../UrlShortener/UrlShortener';
import Shortened from '../UrlShortener/Shortened';
import { Body, BodyWrapper } from './bodyStyles';

export default () => {

    const [copied, setCopied] = useState('');
    const [newUrls, setNewUrls] = useState([
        {
            "hashid": "nJjVbE",
            "url": "https://www.youtube.com/watch?v=W_Rz-2usdyY",
            "created_at": "2020-09-22T20:38:13.629973Z"
        },
        {
            "hashid": "nJjVbx",
            "url": "https://www.youtube.com/watch?v=W_Rz-2usdyY",
            "created_at": "2020-10-22T20:38:13.629973Z"
        }
    ]);

    const updateUrls = (newUrl) => {
        setNewUrls([...newUrls, newUrl]);
    }


    return (
        <Body>
            <BodyWrapper>
                <UrlShortener updateUrls={updateUrls}/>
                <div className='shortened-container'>
                    {newUrls.map(newUrl => {
                        return <Shortened 
                                    key={newUrl.created_at} 
                                    newUrl={newUrl}
                                    copied={copied}
                                    setCopied={setCopied}
                                />
                    })}
                </div>
            </BodyWrapper>
            
        </Body>
    ); 
}