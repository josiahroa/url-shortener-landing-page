import React from 'react';
import { CTABar } from './footerStyles';
import { H2, Button } from '../globalStyles';

export default () => {
    return (
        <CTABar>
            <H2 color='white'>Boosts your links today</H2>
            <Button>Get Started!</Button>
        </CTABar>
    );
}