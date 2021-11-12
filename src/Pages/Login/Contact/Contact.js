import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MuButton from '../../Shared/StyleComponent/MuButton/MuButton';

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: '#053040',
            textAlign: 'center',
            padding: '30px'
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '100%',
            height: 150,
            margin: '20px 0',
            borderRadius: 3,
            fontFamily: 'inherit',
            textAlign: 'left',
            padding: 15
        },
    })
    const { root, textArea } = useStyle()
    return (
        <div className={root}>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h4" color="#13C824">Contact Us</Typography>
                    <Typography variant="h6" color="#fff">Please Submit Your Comments</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter Your Email"
                        type="email"
                        margin="normal"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Enter Your Subject"
                        type="text"
                        margin="normal"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    <textarea className={textArea} placeholder="Enter Your Comments"></textarea>
                    <MuButton>Submit</MuButton>
                </Container>
            </div >
        </div >
    );
};

export default Contact;