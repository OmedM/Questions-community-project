import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import { categories } from './question-categories.js'

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
                gap: 2
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
                <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth />
            </Container>
            <TextField id="outlined-basic" label="Display name" variant="outlined" fullWidth />
            <NativeSelect
                fullWidth
                variant='standard'
                defaultValue={100}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                    <option disabled value={100}>Select a role</option>
                    {
                        categories.map(
                            (category, key) => {
                                return <option value={category.id} key={key}>{category.label}</option>
                            }
                        )
                    }
            </NativeSelect>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" fullWidth />
            <TextField id="outlined-basic" label="Re-type your password" type='password' variant="outlined" fullWidth />
            <Container
                sx={{
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
                        Sign up
                    </Button>
                </Link>
            </Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography variant='overline' fontSize={13} color='primary'>
                    Login
                </Typography>
            </Link>
        </Container>
    )
}

export default LoginPage;