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
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../API/api.js';

function AdminUsers() {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const rows = useSelector((state) => state.user.users);
  const token = useSelector((state) => state.user.currentToken);

  const dispatch = useDispatch();

  React.useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    try {
      const res =  await axios.get(getUsers)
        setUsers(res.data.users)
        dispatch(userActions.adminUsersList(res.data.users));
    }
    catch (errors) {
      alert('Something went wrong!')
    }
  }

  const deletingUser = async () => {
    try {
        const res = await axios.delete(deleteUser + selectedUser, {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           });
           refresh();
    }
    catch (errors) {
        alert('Something went wrong!');
    }
}

  return (
    <TableContainer sx={{ padding: '2rem 2%', width: '96%' }}>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Typography variant='h5'>
          All QCP users
        </Typography>
        <Button onClick={refresh}>Refresh</Button>
      </Container>
      <Divider />
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#eee' }}>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>E-mail</TableCell>
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
              <TableCell>{row.email}</TableCell>
              <TableCell align='right'>
                <Button
                  color='error'
                >
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