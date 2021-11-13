import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// IMAGE IMPORT
import bedsheet from '../../../images/bedshit.jpg';
import handbag from '../../../images/handbag.jpg';
import officebag from '../../../images/officebeg.jpg';
import personal from '../../../images/personal.jpg';
import pillow from '../../../images/pillow.jpg';
import wallpic from '../../../images/wallpic.jpg';
import Service from '../Service/Service';


const services = [
    {
        id: 101,
        name: 'BEDSHEET',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 1450,
        img: bedsheet
    },
    {
        id: 102,
        name: 'HANDBAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 650,
        img: handbag
    },
    {
        id: 103,
        name: 'OFFICE BAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 950,
        img: officebag
    },
    {
        id: 104,
        name: 'PILLOW COVER',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 450,
        img: pillow
    },
    {
        id: 105,
        name: 'PERSONAL BAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 950,
        img: personal
    },
    {
        id: 106,
        name: 'WALL VIEW',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 1050,
        img: wallpic
    }
]

const Services = () => {
    return (
        <Box className="my-5" sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 5, color: "#070E94" }}>
                    OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(serviceitem => <Service
                            key={serviceitem.id}
                            serviceitem={serviceitem}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;