import React from 'react';
import Navigation from '../../Navigation/Navigation';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import BookingHeader from '../BookingHeader/BookingHeader';

const MyProducts = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <BookingHeader date={date} setDate={setDate}></BookingHeader>
            <AvailableProducts date={date}></AvailableProducts>
        </div>
    );
};

export default MyProducts;