import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { userActions } from '../redux/user-slice';
import { getUsers } from '../API/api';

export default function OutlinedCard(props) {

  const dispatch = useDispatch();

  React.useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    try {
      const res =  await axios.get(getUsers)
        dispatch(userActions.adminUsersList(res.data.users));
    }
    catch (errors) {
      alert('Something went wrong!')
    }
  }

  const user = useSelector((state) => state.user.adminUsersList);
  const {id} = props.question.authorId

  return (
    <Box sx={{ minWidth: 275, margin: '1rem 0rem' }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.question.dateCreated}
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
