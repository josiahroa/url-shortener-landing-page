import React from 'react';
import { Shortened } from './urlShortenerStyles';
import { Link, Button } from '../globalStyles';

export default ({newUrl}) => {
    return (
        <Shortened>
            <Link color='black'>{newUrl.url}</Link>
            <Link color='primary'>{`https://rel.ink/${newUrl.hashid}`}</Link>
            <Button round='false'>
                <p>Copy</p>
            </Button>
        </Shortened>
    )
}