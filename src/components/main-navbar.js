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

const MainNavBar = () => {
  const location = useLocation();

  return (
    <AppBar
        position="sticky"
        sx={{
            backgroundColor: '#eee',
            width: '100%'
        }}
    >
      <Container disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Typography
          variant='h5'
          sx={{
            marginLeft: 3,
            color: '#000'
          }}
        >
          {location.pathname.charAt(6).toUpperCase() + location.pathname.slice(7)}
        </Typography>
        <Toolbar 
            disableGutters
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to='/main/user' style={{ textDecoration: 'none', color: 'inherit' }}>
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