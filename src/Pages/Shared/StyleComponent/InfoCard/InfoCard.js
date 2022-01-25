import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../dataInfo/dataInfo';


const InfoCard = () => {
    return (
        <div className="">
            <Container>
                <Grid container spacing={2} style={{ height: 250 }}>
                    {
                        infoData.map(({ Icon, title, description, email, call, background }) => <Grid
                            item xs={12} sm={12} md={4} lg={4}>
                            <Paper variant="outlined" sx={{ display: "flex", justifyContent: "center", p: 2, background: background, color: "#0F2303", height: 150 }}>
                                <Icon sx={{ fontSize: 60 }} />
                                <div>
                                    <Typography variant="body1">{title}</Typography>
                                    <Typography variant="subtitle1">{description}</Typography>
                                    <Typography variant="subtitle1">{email}</Typography>
                                    <Typography variant="subtitle1">Call: {call}</Typography>
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