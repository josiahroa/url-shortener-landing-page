import React from 'react';
import Card from './Card';
import { Info, Bar } from './bodyStyles';

import brandRecognitionIcon from '../../assets/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/icon-fully-customizable.svg';

export default () => {
    return (
        <Info>
            <Bar/>
            <Card
                title="Brand Recognition"
                body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
                img={brandRecognitionIcon}
            />
            <Card
                title="Detailed Records"
                body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                img={detailedRecordsIcon}
                marginTop='30px'
            />
            <Card
                title="Fully Customizable"
                body="Improve brand awareness and content discoverability through customizable links, supercharing audience engagement."
                img={fullyCustomizableIcon}
                marginTop='60px'
            />
        </Info>
    );
}