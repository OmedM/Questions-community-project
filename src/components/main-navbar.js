import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sidebarActions } from '../redux/sidebar-slice.js'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useDispatch, useSelector } from 'react-redux';

const MainNavBar = () => {
  const location = useLocation();

  const isOpen = useSelector((state) => state.sidebar.sidebar);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(sidebarActions.toggle())
  }

  return (
    <AppBar
        position="sticky"
        disableGutters
        sx={{
            backgroundColor: '#eee',
            width: '100%'
        }}
    >
      <Container
        maxWidth
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <KeyboardDoubleArrowLeftIcon className={`${!isOpen && 'flip'}`} onClick={toggle} fontSize='large' sx={{ color: '#000' }}/>
          <Typography
            variant='h6'
            sx={{
              marginLeft: 3,
              color: '#000'
            }}
          >
            {location.pathname.charAt(11).toUpperCase() + location.pathname.slice(12)}
          </Typography>
        </Container>
        <Toolbar 
            disableGutters
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to='/user/main/user' style={{ textDecoration: 'none', color: 'inherit' }}>
              <Tooltip title="Open User Profile">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Admin" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: '#293763' }} />
                </IconButton>
              </Tooltip>
            </Link>
            <Container>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button
                        color='error'
                        variant='outlined'
                        fullWidth={true}
                    >
                        Logout
                    </Button>
                </Link>
            </Container>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavBar;