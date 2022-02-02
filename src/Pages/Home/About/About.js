import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import imge from '../../../images/about/crafts.jpeg';
import Reviews from '../../Shared/StyleComponent/Reviews/Reviews';


const About = () => {
    return (
        <div className="mt-5">
            <h1 className="mb-5 text-primary">ABOUT US</h1>
            <div style={{ minHeight: 300, display: 'flex' }}>
                <Container style={{ alignItems: 'center' }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="h4" sx={{ fontWeight: 500 }} color="#014305">
                                HANDICRAFT BD PRODUCTS
                            </Typography>
                            <Typography style={{ fontSize: 20, textAlign: 'justify' }} sx={{ lineHeight: 2, my: 3 }}>
                                Handicraft is a world wide famous beautiful home and official required products. Company always maintain good quality production since 1998. We have more the 150 items and 350 employee. Others, our products export 20 countries in the world. So, visit our website and contact now.Thank you.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <img src={imge} alt="" width="100%" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Grid sx={{ my: 5 }}>
                <Reviews></Reviews>
            </Grid>
        </div >
    );
};

export default About;