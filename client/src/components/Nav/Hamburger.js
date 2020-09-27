import React from 'react';
import { Hamburger, Bar } from './navStyles';

export default ({ hover }) => {
    // useEffect(() => {
    //     console.log(hover);
    // }, [hover])
    return (
        <Hamburger>
            <Bar hover={hover}/>
            <Bar hover={hover}/>
            <Bar hover={hover}/>
        </Hamburger>
    );
}