import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Button from '@mui/material/Button';

export default function ErrorPage() {
    return (
        <Container
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
            }}
        >
            <img style={{ width: '40vw'}} src="https://www.logolynx.com/images/logolynx/f6/f6e5b06f6aad7910506686b3c81137b8.png"/>
            <Typography
                variant="h4"
                align='center'
            >
                Error! this page doesn't belong to this universe
            </Typography>
            <Link to='/user/main/welcome' style={{ textDecoration: 'none' }}>
                <Button variant="outlined">
                    Back to home universe
                </Button>
            </Link>
        </Container>
    )
}