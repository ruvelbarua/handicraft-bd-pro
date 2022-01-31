import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../dataInfo/dataInfo';


const InfoCard = () => {
    return (
        <div className="container my-5">
            <Container style={{ height: 650 }}><hr />
                <Typography variant="h3" component="div" sx={{ fontWeight: 600, m: 5, color: "#070C6A " }}>
                    What our customers are saying
                </Typography><hr />
                <Grid container spacing={2} style={{ height: 250 }}>
                    {
                        infoData.map(({ image, title, description, email, background }) => <Grid
                            item xs={12} sm={12} md={4} lg={4}>
                            <Paper variant="outlined" sx={{ display: "flex", justifyContent: "center", p: 2, background: background, color: "#0F2303", height: 250 }}>

                                <div>
                                    <Typography className="" component="div" sx={{ flexGrow: 1 }}>
                                        <img src={image} alt="" width="20%" />
                                    </Typography>
                                    <Typography variant="body1">{title}</Typography>
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

export default InfoCard;