import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const Service = (props) => {
    const { name, price, description, img } = props.serviceitem;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, background: "#DEF3E0", boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', height: '280px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price:{price}Tk/=
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default Service;