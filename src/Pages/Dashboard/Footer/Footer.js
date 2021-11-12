import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Footer = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: "start", background: "#053040", color: "#fff" }}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6">CONTACT US:</Typography>
                        <Typography variant="body1">Email: handicraftbd@gmail.com</Typography>
                        <Typography variant="body1">
                            Facebook</Typography>
                        <Typography variant="body1">Twitter:</Typography>
                        <Typography variant="body1">Instagram:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6">OUR SERVICES:</Typography>
                        <Typography variant="body1">Home Delivery</Typography>
                        <Typography variant="body1">
                            Online Booking</Typography>
                        <Typography variant="body1">Transport Service</Typography>
                        <Typography variant="body1">Online Banking</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6">GOOGLE MAP</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Footer;