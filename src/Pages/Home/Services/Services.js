import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((result) => setServices(result));
    }, []);
    
    return (
        <Box className="my-5" sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 5, color: "#070E94" }}>
                    OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;