import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Errorimg from '../../../images/logo/404.jpg';

const NoPage = () => {
    return (
        <div className="my-5">
            <div>
                <img style={{ width: '50rem', height: '20rem' }} src={Errorimg} alt="" />
            </div>
            <br />
            <Button as={HashLink} to="/home" variant="outline-primary">Go Home</Button>
        </div>
    );
};

export default NoPage;