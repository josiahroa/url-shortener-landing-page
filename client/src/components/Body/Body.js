import React, { useState } from 'react';
import UrlShortener from '../UrlShortener/UrlShortener';
import Shortened from '../UrlShortener/Shortened';
import { Body } from './bodyStyles';

export default () => {

    const [newUrls, setNewUrls] = useState([
        {
            "hashid": "nJjVbE",
            "url": "https://www.youtube.com/watch?v=W_Rz-2usdyY",
            "created_at": "2020-09-22T20:38:13.629973Z"
        },
        {
            "hashid": "nJjVbE",
            "url": "https://www.youtube.com/watch?v=W_Rz-2usdyY",
            "created_at": "2020-09-22T20:38:13.629973Z"
        }
    ]);

    const updateUrls = (newUrl) => {
        setNewUrls([...newUrls, newUrl]);
    }

    return (
        <Body>
            <UrlShortener updateUrls={updateUrls}/>
            <div className='shortened-container'>
                {newUrls.map(newUrl => {
                    return <Shortened 
                                key={newUrl.created_at} 
                                newUrl={newUrl}
                            />
                })}
            </div>
        </Body>
    ); 
}