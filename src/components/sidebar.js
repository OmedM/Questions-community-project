import React from 'react';
import sidebarItems from './sidebar-items.js';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function Sidebar() {

    return(
        <div>
            <Container>
                <ButtonGroup
                    variant='outlined'
                    color='secondary'
                    disableElevation
                    onClick={() => { alert('Clicked!')}}
                >
                    <Button startIcon={<CheckCircleIcon />} variant='contained'>Submit</Button>
                    <Button startIcon={<DeleteIcon />}>Discard</Button>
                </ButtonGroup>
            </Container>
        </div>
    )
}

export default Sidebar;