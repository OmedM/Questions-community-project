import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275, margin: '1rem 0rem' }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Username
            </Typography>
            <Typography variant="h5" component="div">
              {props.question.question}
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
            <br/>
            <Typography variant="body2">
              {props.question.description.slice(0, 200) + '...'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
