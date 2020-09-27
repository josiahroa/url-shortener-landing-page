import React, { useState } from 'react';
import { Nav } from './navStyles';
import { Link, Button } from '../globalStyles';
import logo from '../../assets/logo.svg';
import Hamburger from './Hamburger';

export default () => {

    const [hover, setHover] = useState(false);
    const [visible, setVisible] = useState(false);
    
    return (
        <Nav>
            <div className='left'>
                <img src={logo} alt='Shortly'/>
                <div className='links'>
                    <Link>Features</Link>
                    <Link>Pricing</Link>
                    <Link>Resources</Link>
                </div>
            </div>
            <div 
                className='right'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setVisible(!visible)}
            >
                <div className='btn-container'>
                    <Link>Login</Link>
                    <Button>
                        <p>Sign Up</p>
                    </Button>
                </div>
                <Hamburger 
                    hover={hover}
                />
            </div>
        </Nav>
    )
}