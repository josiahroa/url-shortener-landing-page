import React from 'react';
import { Card } from './bodyStyles';
import { H3, Text } from '../globalStyles'; 

export default ({ title, body, img, marginTop }) => {
    return (
        <Card marginTop={marginTop}>
            <div className='img-wrapper'>
                <img src={img}/>
            </div>
            <div className='content-wrapper'>
                <H3>{title}</H3>
                <Text>{body}</Text>
            </div>
        </Card>
    );
}