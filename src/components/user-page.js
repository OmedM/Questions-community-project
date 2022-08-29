import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

function UserPage() {
  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 0px',
        gap: 5
      }}
    >
        <Avatar
          alt="Admin"
          src="/static/images/avatar/2.jpg"
          sx={{
            backgroundColor: '#222a43',
            width: '150px',
            height: '150px',
            fontSize: 90,
            marginBottom: 5
          }}
        />
    </Container>
  );
}

export default UserPage;