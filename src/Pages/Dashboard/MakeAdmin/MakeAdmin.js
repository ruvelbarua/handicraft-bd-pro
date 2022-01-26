import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
// import useAuth from '../../../contexts/AuthProvider/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
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
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin Page</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;