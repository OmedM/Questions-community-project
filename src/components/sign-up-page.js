import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import LoginIcon from '@mui/icons-material/Login';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonGroup, Typography } from '@mui/material';

function LoginPage() {
    return (
        <Container
            maxWidth='xs'
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <LoginIcon fontSize="large" sx={{ marginBottom: 3 }}/>
            <TextField id="outlined-basic" label="Username" variant="outlined" margin="dense" />
            <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
            <Container
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Link to='/main' style={{ textDecoration: 'none' }}>
                    <Button
                        variant='contained'
                        size='large'
                        fullWidth={true}
                    >
                        Login
                    </Button>
                </Link>
            </Container>
            <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                <Container
                    sx={{
                        marginTop: 2
                    }}
                >
                    <Typography variant='overline' fontSize={13} color='primary'>
                        Create new account
                    </Typography>
                </Container>
            </Link>
            <Container
                sx={{
                    margin: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ButtonGroup variant='outlined' color='primary'>
                    <Button>
                        Admin
                    </Button>
                    <Button>
                        Responder
                    </Button>
                    <Button>
                        User
                    </Button>
                </ButtonGroup>
            </Container>
        </Container>
    )
}

export default LoginPage;