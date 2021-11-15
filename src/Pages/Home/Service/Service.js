import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const Service = (props) => {
    const { _id, name, price, description, img } = props.service;

    const [isDeleted, setIsDeleted] = useState(null);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDeleted(true);
                } else {
                    setIsDeleted(false);
                }
            });
        console.log(isDeleted)
    };

    // const handleAddToCart = (index) => {
    //     console.log(index)
    // }
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
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </Button>
                    <Link to={`/update/${_id}`}>
                        <Button size="small" color="primary">
                            Update
                        </Button></Link>

                    <Button onClick="/product" size="small" color="primary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default Service;