import React from 'react';
import Container from '@mui/material/Container';
import MuButton from '../../Shared/StyleComponent/MuButton/MuButton';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import imge from '../../../images/about/aboutbg.jpg';


const About = () => {
    return (
        <div className="mt-5">
            <h1 className="mb-5 text-primary">WELCOME</h1>
            <div style={{ minHeight: 300, display: 'flex' }}>
                <Container style={{ alignItems: 'center' }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="h4" sx={{ fontWeight: 400 }} color="#014305">
                                HANDICRAFT BD PRODUCTS
                            </Typography>
                            <Typography style={{ fontSize: 20, textAlign: 'justify' }} sx={{ lineHeight: 2, my: 3 }}>
                                Handicraft is a world wide femous natural beauty personal and family products. Basicaly, Bangladeshi made products is a best choice in the world. Our company ensure export quality product. Every items are mantain best services. So, visit our best products and order now.Thank you.
                            </Typography>
                            <link rel="stylesheet" href="/products" />
                            <MuButton>Visit More...</MuButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <img src={imge} alt="" width="100%" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div >
    );
};

export default About;