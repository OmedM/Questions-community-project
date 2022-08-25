import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { upperSidebarItems, lowerSidebarItems } from '../components/sidebar-items.js'
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';

function Sidebar() {
    return(
        <Drawer
            sx={{
            width: 250,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
                backgroundColor: '#222a43',
                color: '#fff',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Container
                sx={{
                    padding: 1.5,
                }}
            >
                <Typography
                    variant='h3'
                    align='center'
                >
                    QCP
                </Typography>
            </Container>
            <Divider variant="middle" sx={{backgroundColor: '#fff'}}/>
            <List>
            {upperSidebarItems.map((value, key) => (
                <ListItem key={value.id} disablePadding>
                    <Link to={value.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon sx={{color: '#fff'}}>
                                {value.icon}
                            </ListItemIcon>
                            <ListItemText primary={value.label} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
            </List>
            <Divider variant="middle" sx={{backgroundColor: '#fff'}}/>
            <List>
            {lowerSidebarItems.map((value, key) => (
                <ListItem key={value.id} disablePadding>
                    <Link to={value.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ListItemIcon sx={{color: '#fff'}}>
                                {value.icon}
                            </ListItemIcon>
                            <ListItemText primary={value.label} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
            </List>
            <Divider variant="middle" sx={{backgroundColor: '#fff'}}/>
            <Container
                sx={{
                    marginTop: 2,
                }}
            >
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
        </Drawer>
    )
}

export default Sidebar;