import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgimg1 from '../../../images/about/bgimg.jpg';
import bgimg2 from '../../../images/about/bhrs.png';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    const style = {
        miniHeight: 500,
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: `url(${bgimg1})`
    }

    return (
        <div style={style} className="container my-5">
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 600, color: "#199507" }}>
                                HANDICRAFT BD <br />
                                START HEAR
                            </Typography>
                            <Typography variant="body1" sx={{ my: 2, fontSize: 18, fontWeight: 300, color: '#2C0208 ' }}>
                                WORLD CLASS HANDICRAFT PRODUCTS BY NOW IN OUR WEBSITE.
                            </Typography>
                            <Link style={{ textDecoration: 'none' }} to={`/products`}>
                                <Button variant="outline-primary">VSIT MORE</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={bgimg2} alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;