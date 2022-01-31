import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgimg1 from '../../../images/about/bgimg.jpg';
import bgimg2 from '../../../images/about/plogo.png';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    const style = {
        miniHeight: 500,
        height: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: `url(${bgimg1})`,
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="container my-5">
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }} style={style}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 500, color: "#126E05" }}>
                                HANDICRAFT BD START HEAR
                            </Typography>
                            <Typography variant="body1" sx={{ my: 2, fontSize: 20, fontWeight: 500, color: '#2C0208 ' }}>
                                Our all products made by "Hand" and "Modern Technology". Company allways provide good quality service. Client satifaction is our first priority. we are export around the world. So visit and order now.
                            </Typography>
                            <Link underLine="none" to={`/products`}>
                                <Button style={{ width: '40%', fontSize: 20 }} variant="contained">VSIT MORE</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ borderRadius: 25 }}>
                            <img src={bgimg2} alt="" width="70%" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;