import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MainNavBar = () => {
  return (
    <AppBar
        position="sticky"
        sx={{
            backgroundColor: '#eee'
        }}
    >
      <Container maxWidth="xl" disableGutters>
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
                  <Avatar alt="Admin" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: '#222a43' }} />
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