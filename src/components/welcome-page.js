import { Button, ButtonGroup, Typography, Container } from "@mui/material";
import { Link } from 'react-router-dom';
import icon from '../figures/icons8-chat.gif';



export default function Welcome() {
    return(
        <Container
            disableGutters
            maxWidth='md'
            sx={{
                padding: '5rem 1rem',
            }}
        >
            <Typography
                variant='h2'
                align='center'
            >
                Welcome to QCP
            </Typography>
            <img style={{ width: '100%' }} src="https://tricomb2b.com/sites/default/files/paragraph/image/GettyImages-1291089965.jpg" />
            <Typography align="justify" paddingX={8}>
                QCP (Question Community Project) is a Q&A community among a department's employees. Anyone on a team can create an account and select their role to participate in a problem-solving environment. With QCP, a team can decide what category they need, start the action to solve their bugs and problems and communicate more precisely and efficiently.
            </Typography>
            <Container
                sx={{
                    width: '100%',
                    margin: '2rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={icon} style={{margin: '3rem'}} />
            </Container>
            <Typography
                variant='h5'
                align='center'
            >
                Start communicating now!
            </Typography>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '3rem'
                }}
            >
                <Link to='/user/main/user' style={{ textDecoration: 'none' }}>
                    <Button>Go to your profile</Button>
                </Link>
                <Link to='/user/main/questions' style={{ textDecoration: 'none' }}>
                    <Button>Go to the questions</Button>
                </Link>
                <Link to='/user/main/ask-question' style={{ textDecoration: 'none' }}>
                    <Button>Ask a question</Button>
                </Link>
            </Container>
        </Container>
    )
}