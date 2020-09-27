import React from 'react';
import { Dropdown } from './navStyles';
import { Link, Button } from '../globalStyles';

export default ({ visible, setVisible }) => {
    return (
        <Dropdown
            visible={visible}
            onClick={() => setVisible(false)}
        >
            <Link color='white'>Features</Link>
            <Link color='white'>Pricing</Link>
            <Link color='white'>Resources</Link>
            <div className='divider'/>
            <Link color='white'>Login</Link>
            <div className='btn-wrapper'>
                <Button 
                    round='false'
                    fullWidth={true}
                >Sign Up</Button>
            </div>
        </Dropdown>
    );
}