import React, { useEffect, useState } from 'react';
import { UrlShortener } from './urlShortenerStyles';
import { Input, Button, Error } from '../globalStyles';
import axios from 'axios';

export default ({updateUrls}) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    

    const handleChange = e => {
        setUrl(e.target.value);
    }

    const handleSubmit = () => {
        if(url){
            axios.post('https://rel.ink/api/links/', {url})
            .then(res => {
                updateUrls(res.data);
            })
            .catch(() => {
                setError('Error sending url to server');
            })
            setUrl('');
        }else{
            setError('Please add a link');
        }
    }

    useEffect(() => {
        if(url){
            setError('');
        }
    }, [url])

    return (
        <UrlShortener>
            <div className='error-wrapper'>
                <Error>{error}</Error>
            </div>
            <div className='input-wrapper'>
                <Input 
                    placeholder='Shorten a link here...'
                    value={url}
                    onChange={handleChange}
                    error={error.length > 0}
                />
                <div className='btn-wrapper'>
                    <Button round='false' width='150px' fullWidth={true} onClick={handleSubmit}>
                        <p>Shorten It!</p>
                    </Button>
                </div>
            </div>
        </UrlShortener>
    );
}