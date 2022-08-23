import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";

export default function ErrorPage() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img src="https://www.logolynx.com/images/logolynx/f6/f6e5b06f6aad7910506686b3c81137b8.png"/>
            <Typography
                variant="h4"
            >
                Error! this page doesn't belong to this universe
            </Typography>
        </Container>
    )
}