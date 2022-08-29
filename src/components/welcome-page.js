import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import icon from './icons8-chat.gif'


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
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mauris tempus, malesuada tellus ut, vehicula metus. Vestibulum dapibus porttitor nunc, quis auctor massa varius at. Pellentesque pulvinar erat non leo egestas scelerisque. Integer vitae ante id ligula finibus lacinia.
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
                <img src={icon} />
            </Container>
        </Container>
    )
}