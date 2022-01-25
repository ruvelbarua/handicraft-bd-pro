import { Button, CircularProgress, Container, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';
import login from '../../images/bigpot.jpg';
import useAuth from '../../contexts/AuthProvider/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ bgcolor: 'success.main' }} variant="h4" gutterBottom>LOGIN PAGE</Typography>
                    <hr />
                    <span>*New user please registration first.</span>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="outlined" />

                        <Button sx={{ width: '35%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text" sx={{ color: "#E22C03" }}> New User? Click Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>========== OR ==========</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Signin</Button>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};


export default Login;