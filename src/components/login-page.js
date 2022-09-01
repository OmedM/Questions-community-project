import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import LoginIcon from '@mui/icons-material/Login';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonGroup, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from '../redux/test-slice.js';
import axios from 'axios';
import { postUserLogin } from '../API/api.js';
import { userActions } from '../redux/user-slice.js';

function LoginPage() {
    const [inputs, setInputs] = React.useState({
        email: '',
        password: ''
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post(postUserLogin, {
                "email": inputs.email,
                "password": inputs.password
            })
            dispatch(userActions.currentUser(res.data))
        }
        catch (errors) {
            alert('Something went wrong!');
        }
    }

    const dispatch = useDispatch();

    const testAdminLogin = () => {
        setInputs({email: 'admin@example.com', password: 'admin12345'});
    }

    const testResponderLogin = () => {
        setInputs({email: 'testsf@example.com', password: 'testsf1234'});
    }

    const testUserLogin = () => {
        setInputs({email: 'testqa@example.com', password: 'testqa1234'});
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
                backgroundPosition: 'center'
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
                <TextField
                    id="outlined-basicE"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    name='email'
                    value={inputs.email || ''}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-basicP"
                    label="Password"
                    variant="outlined"
                    type='password'
                    fullWidth
                    name='password'
                    value={inputs.password || ''}
                    onChange={handleChange}
                />
                <Link to='/user/main/welcome' style={{ textDecoration: 'none' }}>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={handleSubmit}
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
                    <ButtonGroup >
                        <Button onClick={testAdminLogin} variant='outlined' color='primary'>
                            Admin
                        </Button>
                        <Button onClick={testResponderLogin} variant='outlined' color='primary'>
                            Responder
                        </Button>
                        <Button onClick={testUserLogin} variant='outlined' color='primary'>
                            User
                        </Button>
                    </ButtonGroup>
                        <Typography variant='subtitle1'>
                            Then click on Login
                        </Typography>
                </Container>
            </Container>
        </Container>
    )
}

export default LoginPage;