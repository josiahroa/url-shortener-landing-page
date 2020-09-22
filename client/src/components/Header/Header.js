import React from 'react';
// import UrlShortener from '../UrlShortener/UrlShortener';
import { Header } from './headerStyles';
import { Button, H1, Text } from '../globalStyles';
import headerImg from '../../assets/illustration-working.svg'

export default () => {
    return (
        <Header>
            <div className='top'>
                <div className='left'>
                    <H1>More than just</H1>
                    <H1>shorter links</H1>
                    <div style={{ marginTop: '5px', marginBottom: '25px' }}>
                        <Text>Build your brand's recognition and get detailed</Text>
                        <Text>insights on how your lins are performing.</Text>
                    </div>
                    <div style={{ width: '150px' }}>
                        <Button>
                            <p>Get Started</p>
                        </Button>
                    </div>
                    
                </div>
                <div className='right'>
                    <img src={headerImg} alt='Worker illustration'/>
                </div>
            </div>
            {/* <UrlShortener/> */}
        </Header>
    );
}