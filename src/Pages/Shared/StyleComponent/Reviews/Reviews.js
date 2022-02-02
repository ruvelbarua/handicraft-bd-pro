import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { reviews } from '../../dataInfo/dataInfo';

const Reviews = () => {
    return (
        <div className="container my-5">
            <Container style={{ height: 600 }}><hr />
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, m: 2, color: "#070C6A " }}>
                    OUR CUSTOMERS SAYS
                </Typography><hr />
                <Grid container spacing={2}>
                    {
                        reviews.map(({ image, title, description, email, background }) => <Grid
                            item xs={12} sm={12} md={4} lg={4}>
                            <Paper variant="outlined" sx={{ display: "flex", justifyContent: "center", p: 2, background: background, color: "#0F2303", height: 210 }}>
                                <div>
                                    <Typography className="" component="div" sx={{ flexGrow: 1 }}>
                                        <img src={image} alt="" width="40%" />
                                    </Typography>
                                    <Typography variant="h6">{title}</Typography>
                                    <Typography variant="subtitle1">{description}</Typography>
                                    <Typography variant="subtitle1">{email}</Typography>
                                </div>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container >
        </div>
    );
};

export default Reviews;