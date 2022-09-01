import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getRoles } from '../API/api.js';
import { roleActions } from '../redux/role-slice';
import { postUser } from '../API/api.js';


function SignUpPage() {
    const [newUser, setNewUser] = React.useState({
        role: '',
        firstName: '',
        lastName: '',
        displayName: '',
        password: '',
        email: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewUser(values => ({...values, [name]: value}))
    }

    const dispatch = useDispatch();

    const role = useSelector((state) => state.roles.roles);

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
        const res =  await axios.get(getRoles)
            dispatch(roleActions.roles(res.data.roles));
        }
        catch (errors) {
        alert('Something went wrong!')
        }
    }

    const addUser = async () => {
        try {
            const res = await axios.post(postUser, {
                "role": newUser.role,
                "firstName": newUser.firstName,
                "lastName": newUser.lastName,
                "displayName": newUser.displayName,
                "password": newUser.password,
                "email": newUser.email
            })
            alert('Done ;)')
        }
        catch (errors) {
            alert('Something went wrong!');
        }
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
                <PersonAddIcon fontSize="large" sx={{ marginBottom: 3 }}/>
                <Container
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <TextField onChange={handleChange} name='firstName' label="First name" variant="outlined" fullWidth />
                    <TextField onChange={handleChange} name='lastName' label="Last name" variant="outlined" fullWidth />
                </Container>
                <TextField onChange={handleChange} name='displayName' label="Display name" variant="outlined" fullWidth />
                <NativeSelect
                    onChange={handleChange}
                    fullWidth
                    variant='standard'
                    defaultValue={100}
                    inputProps={{
                        name: 'role',
                    }}
                >
                        <option disabled value={100}>Select a role</option>
                        {
                            role.map(
                                (role) => {
                                    {
                                        if(role.name === 'admin') {
                                            return <option disabled value={role.name} key={role.id}>{role.name}</option>
                                        }
                                    }
                                    return <option value={role.name} key={role.id}>{role.name}</option>
                                }
                            )
                        }
                </NativeSelect>
                <TextField onChange={handleChange} name='email' label="E-mail" variant="outlined" fullWidth />
                <TextField onChange={handleChange} name='password' label="Password" type='password' variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Re-type your password" type='password' variant="outlined" fullWidth />
                <Container
                    fullWidth
                    disableGutters
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* <Link to='/user/main/welcome' style={{ textDecoration: 'none' }}> */}
                        <Button
                            onClick={addUser}
                            variant='contained'
                            size='large'
                            fullWidth
                            disableGutters
                        >
                            Sign up
                        </Button>
                    {/* </Link> */}
                </Container>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography variant='overline' fontSize={13} color='primary'>
                        Login
                    </Typography>
                </Link>
            </Container>
        </Container>
    )
}

export default SignUpPage;