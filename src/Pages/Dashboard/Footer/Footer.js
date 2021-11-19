import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';
import logo from '../../../images/logo/logo2.png'

const useStyle = makeStyles({
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})

const Footer = () => {
    const { socialIcon } = useStyle();

    return (
        <div className="my-5">
            <footer>
                <Container>
                    <Grid container marginTop={4} marginBottom={10} sx={{ textAlign: "center", background: "#021C1C", color: "#fff", width: "100%" }}>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <List sx={{ mt: 4 }}>
                                <ListItemText >CONTACT US:</ListItemText>
                                <ListItemText>Email: handicraftbd@gmail.com</ListItemText>
                            </List>
                            <IconButton className={socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <List sx={{ mt: 4 }}>
                                <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>OUR SERVICES:</ListItemText>
                                <ListItemText >Home Delivery</ListItemText>
                                <ListItemText >
                                    Online Booking</ListItemText>
                                <ListItemText >Transport Service</ListItemText>
                                <ListItemText >Online Banking</ListItemText>
                            </List>
                        </Grid>
                        <Grid item sx={{ color: "#fff" }} xs={12} sm={12} md={6} lg={3}>
                            <Typography className="" component="div" sx={{ flexGrow: 1 }}>
                                <img src={logo} alt="" height="10%" width="60%" />
                            </Typography>
                            <Typography variant="subtitle1">
                                <ListItemText >Copy Write: Ruvel Barua</ListItemText>
                                <ListItemText >Contact: ruvel.br78@gmail.com</ListItemText>
                                <ListItemText >Thanks By: Programming Hero Team.</ListItemText>
                            </Typography>
                            <Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;