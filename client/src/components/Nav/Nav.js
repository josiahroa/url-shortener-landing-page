import React from 'react';
import { Nav } from './navStyles';
import { Link, Button } from '../globalStyles';
import logo from '../../assets/logo.svg';

export default () => {
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
            <div className='right'>
                <div style={{ width: '170px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link>Login</Link>
                    <Button>
                        <p>Sign Up</p>
                    </Button>
                </div>
            </div>
        </Nav>
    )
}