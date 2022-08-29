import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import LoginIcon from '@mui/icons-material/Login';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonGroup, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { testActions } from '../redux/test-slice.js';

function LoginPage() {

    const dispatch = useDispatch();

    const testAdminLogin = () => {
        dispatch(testActions.loginAdmin());
    }

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(https://149351115.v2.pressablecdn.com/wp-content/uploads/2017/12/SO_3D.png)',
                backgroundSize: 'cover',
            }}
        >
            <Container
                maxWidth='xs'
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2,
                    padding: '2rem',
                    margin: '1rem',
                    backgroundColor: '#fff',
                    borderRadius: '20px'
                }}
            >
                <LoginIcon fontSize="large"/>
                <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
                <Link to='/main/welcome' style={{ textDecoration: 'none' }}>
                    <Button
                        variant='contained'
                        size='large'
                    >
                        Login
                    </Button>
                </Link>
                <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                    <Typography variant='overline' fontSize={13} color='primary'>
                        Create new account
                    </Typography>
                </Link>
                <Container
                    sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        border: '1px solid #5185d2',
                        borderRadius: 3,
                    }}
                >
                    <Typography>
                        [TEST] Login as
                    </Typography>
                    <Container sx={{ display: 'flex', gap: '0.2rem' }}>
                        <Link to='/main/welcome' style={{ textDecoration: 'none' }}>
                            <Button onClick={testAdminLogin} variant='outlined' color='primary'>
                                Admin
                            </Button>
                        </Link>
                        <Link to='/main/welcome' style={{ textDecoration: 'none' }}>
                            <Button variant='outlined' color='primary'>
                                Responder
                            </Button>
                        </Link>
                        <Link to='/main/welcome' style={{ textDecoration: 'none' }}>
                            <Button variant='outlined' color='primary'>
                                User
                            </Button>
                        </Link>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default LoginPage;