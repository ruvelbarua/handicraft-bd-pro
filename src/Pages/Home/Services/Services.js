import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import bedsheet from '../../../images/bedshit.jpg';
import handbag from '../../../images/handbag.jpg';
import officebag from '../../../images/officebeg.jpg';
import personal from '../../../images/personal.jpg';
import pillow from '../../../images/pillow.jpg';
import wallpic from '../../../images/wallpic.jpg';
import Service from '../Service/Service';



const services = [
    {
        name: 'BEDSHEET',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: bedsheet
    },
    {
        name: 'HANDBAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: handbag
    },
    {
        name: 'OFFICE BAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: officebag
    },
    {
        name: 'PILLOW COVER',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: pillow
    },
    {
        name: 'PERSONAL BAG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: personal
    },
    {
        name: 'WALL VIEW',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: wallpic
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;