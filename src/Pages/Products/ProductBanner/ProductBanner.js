import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bgimg from '../../../images/about/aboutbg.jpg';
import Calender from '../Products/Calender';

const ProductBanner = ({ date, setDate }) => {
    const style = {
        display: 'flex',
        alignItem: 'center',
    }
    return (
        <div className="my-5" style={style}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: '#21D9E8', textAlign: "center" }}>BOOKING DATE</Typography>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={bgimg} width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductBanner;