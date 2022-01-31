import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import useAuth from '../../../contexts/AuthProvider/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, price } = booking;
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

    const handleBookingSubmit = e => {
        // Data Collection
        const productorders = {
            ...bookingInfo,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // Send to Database Server products
        fetch('http://localhost:5000/productorders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productorders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
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
                                disabled
                                margin="dense"
                                fullWidth
                                size="small"
                                value={new Date(date).toDateString()}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;