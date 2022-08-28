import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { upperSidebarItems, lowerSidebarItems } from '../components/sidebar-items.js'
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

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
                    padding: 1.35,
                }}
            >
                <Typography
                    variant='h4'
                    align='center'
                >
                    QCP
                </Typography>
            </Container>
            <Divider sx={{backgroundColor: '#fff'}}/>
            <List>
            {upperSidebarItems.map((value) => (
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
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: 1
                }}
            >
                <Typography
                    fontSize='8pt'
                >
                    Omed Muhammed | 2022 | ⓒ | <a href='https://github.com/OmedM/Questions-community-project' target='_blank' style={{ color: 'inherit' }}>Github</a>
                </Typography>
            </Container>
        </Drawer>
    )
}

export default Sidebar;