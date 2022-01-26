import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useAuth from '../../../contexts/AuthProvider/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleonBlur = e => {
        setEmail(e.target.value);
    }
    // const [success, setSuccess] = useState(false);
    // const { token } = useAuth();


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>This is Make Admin Page</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleonBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;