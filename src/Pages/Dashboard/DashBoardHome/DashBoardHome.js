import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Products/Calender/Calender';
import ProductOrder from '../../Products/ProductOrder/ProductOrder';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calender
                    data={date}
                    setDate={setDate}
                >
                </Calender>
            </Grid>
            <Grid item xs={12} sm={7}>
                <h4>PRODUCTS BOOKING DATA</h4>
                <ProductOrder date={date}></ProductOrder>

            </Grid>
        </Grid>
    );
};

export default DashboardHome;