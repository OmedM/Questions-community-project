import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/user-slice.js';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import axios from 'axios';
import { getUsers } from '../API/api.js';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

 function AdminUsers() {
  const [users, setUsers] = React.useState([]);
  const rows = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  const submit = async () => {
    try {
      const res =  await axios.get(getUsers)
        setUsers(res.data.users)
        dispatch(userActions.adminUsersList(res.data.users));
    }
    catch (errors) {
      alert('Something went wrong!')
    }
  }

  return (
    <TableContainer component={Paper} sx={{ padding: 5, width: '93%' }}>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h5'>
          All QCP users
        </Typography>
        <Button onClick={submit}>Refresh</Button>
      </Container>
      <Divider />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align='right'>Delete user</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell>{row.displayName}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align='right'>
                <Button color='error'>
                  <DeleteIcon color='error' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminUsers;