import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';
import logo from '../../../images/logo/logo5.png'
import logo2 from '../../../images/logo/ssl.png'

const Footer = () => {
    const useStyle = makeStyles({
        root: {
            background: '#04121E',
            textAlign: 'center',
            padding: '30px'
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '100%',
            height: 90,
            margin: '20px 0',
            borderRadius: 3,
            fontFamily: 'inherit',
            textAlign: 'left',
            padding: 15
        },
    })
    const { root } = useStyle()

    return (
        <div className="my-5">
            <footer>
                <div className={root}>
                    <div className="my-5">
                        <Container>
                            <Grid container marginTop={4} marginBottom={10} sx={{ textAlign: "center", color: "#fff", width: "100%" }}>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List sx={{ mt: 4 }}>
                                        <ListItemText >CONTACT US:</ListItemText>
                                        <ListItemText>Email: handicraftbd@gmail.com</ListItemText>
                                    </List>
                                    <IconButton sx={{ color: "#fff" }}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#fff" }}>
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#fff" }}>
                                        <InstagramIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List sx={{ mt: 4 }}>
                                        <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>OUR SERVICES:</ListItemText>
                                        <ListItemText >1. Home Delivery</ListItemText>
                                        <ListItemText >
                                            2. Online Booking</ListItemText>
                                        <ListItemText >3. Transport Service</ListItemText>
                                        <ListItemText >4. Online Banking</ListItemText>
                                    </List>
                                </Grid>
                                <Grid item sx={{ color: "#fff", mt: 4 }} xs={12} sm={12} md={6} lg={3}>
                                    <ListItemText >We Accept: </ListItemText>
                                    <Typography className="" component="div" sx={{ flexGrow: 1 }}>
                                        <img src={logo2} alt="" width="60%" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} sx={{ mt: 4 }}>
                                    <ListItemText >Company Logo </ListItemText>
                                    <Typography className="" component="div" sx={{ flexGrow: 1 }}>
                                        <img src={logo} alt="" width="70%" />
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid sx={{ color: "#fff" }}>
                                <div>
                                    <p>All Right Reserved by:Handicraft BD || Developed by: Ruvel Barua.</p>
                                </div>
                            </Grid>
                        </Container>
                    </div >
                </div >
            </footer>
        </div>
    );
};

export default Footer;