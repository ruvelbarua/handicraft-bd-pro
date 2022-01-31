import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import mainlogo from '../../images/logo/logo5.png';
import useAuth from '../../contexts/AuthProvider/useAuth';

export default function Navigation() {
    const { user, logOut } = useAuth();
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            color: '#070C74',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        navListItem: {
            textDecoration: 'none',
            color: '#0C184E '
        }
    });
    const { navItem, navIcon, navItemContainer, navLogo, navListItem } = useStyle()
    const [state, setState] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link className={navListItem} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navListItem} to="/about">About</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={navListItem} to="/products">Products</Link>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: '#2858F1' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} component="div"
                            sx={{ flexGrow: 1, color: '#F9EE0A', fontSize: 15, fontWeight: 400 }}>
                            <img src={mainlogo} alt="" width="12%" />
                            HANDICRAFT BD
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/"><Button sx={{ color: "#FAF9F3" }} color="inherit">
                                HOME
                            </Button></Link>
                            <Link className={navItem} to="/products"><Button sx={{ color: "#FAF9F3" }} color="inherit">
                                PRODUCTS
                            </Button></Link>
                            <Link className={navItem} to="/about"><Button sx={{ color: "#FAF9F3" }} color="inherit">
                                ABOUT
                            </Button></Link>
                        </Box>
                        {
                            user?.email ?
                                <Box>
                                    <Link to="/dashboard">
                                        <Button sx={{ color: '#fff' }} color="inherit">Dashboard</Button>
                                    </Link>
                                    <Button onClick={logOut} sx={{ color: '#C11611' }} color="inherit">Logout</Button>
                                </Box>
                                :
                                <Link to="/login">
                                    <Button sx={{ color: '#C11611' }} color="inherit">Login</Button>
                                </Link>
                        }
                        <p>{user?.email}</p>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClick={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>

    );
}
