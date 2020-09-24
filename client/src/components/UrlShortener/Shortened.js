import React from 'react';
import { Shortened } from './urlShortenerStyles';
import { Link, Button } from '../globalStyles';

export default ({newUrl, copied, setCopied}) => {
    return (
        <Shortened>
            <Link color='black'>{newUrl.url}</Link>
            <div className='right'>
                <div style={{ marginRight: '10px' }}>
                    <Link color='primary'>{`https://rel.ink/${newUrl.hashid}`}</Link>
                </div>
                <Button 
                    round='false' 
                    width='100px'
                    selected={copied === newUrl.hashid}
                    onClick={() => setCopied(newUrl.hashid)}
                >
                    <p>{copied === newUrl.hashid ? 'Copied!' : 'Copy'}</p>
                </Button>
            </div>
        </Shortened>
    )
}