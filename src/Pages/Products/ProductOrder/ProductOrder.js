import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MuButton from '../../Shared/StyleComponent/MuButton/MuButton';
import useAuth from '../../../contexts/AuthProvider/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ProductOrder({ open, handleClose, name, price, date }) {


    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleSubmit = e => {
        const orderbooking = {
            ...bookingInfo,
            price,
            productName: name,
            date: date.toLocaleDateString()
        }
        // send to database server
        fetch('https://mysterious-reef-83390.herokuapp.com/orderdata', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderbooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                handleClose();
            })


        e.preventDefault();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            value={price}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            name="customerName"
                            onBlur={handleOnBlur}
                            placeholder={user.displayName}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder={user.email}
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Mobile Number"
                        />
                        <TextField
                            margin="dense"
                            fullWidth
                            size="small"
                            value={new Date(date).toDateString()}
                        />
                        <MuButton type="submit">Submit</MuButton>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}