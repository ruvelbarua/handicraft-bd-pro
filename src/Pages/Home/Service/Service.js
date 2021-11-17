import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const { _id, name, price, description, img } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, background: "#DEF3E0", boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', height: '280px', margin: '0 auto' }}
                    image={img}
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
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Service;