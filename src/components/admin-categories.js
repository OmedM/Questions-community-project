import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { categoriesActions } from '../redux/categories-slice.js';
import { getCategories } from '../API/api.js';
import { useSelector } from 'react-redux';
import { addCategories } from '../API/api.js';
import { deleteCategories } from '../API/api.js';

function AdminCategories() {
    const [inputs, setInputs] = React.useState({
        categoryName: '',
        categoryDescription: ''
    });
    const [selected, setSelected] = React.useState(null);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const dispatch = useDispatch();

    const category = useSelector((state) => state.categories.categories);
    const token = useSelector((state) => state.user.currentToken);

    React.useEffect(() => {
        refresh();
    }, [])

    const refresh = async () => {
        try {
            const res =  await axios.get(getCategories)
                dispatch(categoriesActions.adminCategoriesList(res.data.categories));
        }
        catch (errors) {
            alert('Something went wrong!');
        }
    }

    const post = async () => {
        try {
            const res = await axios.post(addCategories, { "name": inputs.categoryName, "description": inputs.categoryDescription }, {
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

    const deleteCategory = async () => {
        try {
            const res = await axios.delete(deleteCategories + `/${selected}`, {
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
        
        <Box
            maxWidth='large'
            sx={{
                padding: '5% 20%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    marginBottom: 5
                }}
            >
                Categories
            </Typography>
            <TextField
                label="Category name"
                variant="outlined"
                fullWidth
                name='categoryName'
                value={inputs.categoryName || ''}
                onChange={handleChange}
            />
            <TextField
                label="Category description"
                variant="outlined"
                margin='normal'
                fullWidth
                name='categoryDescription'
                value={inputs.categoryDescription || ''}
                onChange={handleChange}
            />
            <Button
                onClick={post}
                variant='contained'
                size='large'
                fullWidth
                margin="normal"
                startIcon={<AddIcon />}
            >
                Add
            </Button>
            <Typography
                variant='h4'
                sx={{
                    marginTop: 5
                }}
            >
                Delete Category
            </Typography>
            <FormControl fullWidth margin='normal'>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Category
                </InputLabel>
                <Container
                    disableGutters
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 1,
                        paddingTop: 1.5,
                    }}
                >
                <NativeSelect
                    fullWidth
                    defaultValue={100}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option disabled value={100}>Select a category</option>
                    {
                        category.map(
                            (category) => {
                                return <option key={category.id} value={category.id}>{category.id}: {category.name} ({category.description})</option>
                            }
                        )
                    }
                </NativeSelect>
                <Button onClick={refresh}>Refresh</Button>
                </Container>
            </FormControl>
                <Button
                    onClick={deleteCategory}
                    variant='outlined'
                    color='error'
                    size='large'
                    fullWidth
                    margin="normal"
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
        </Box>
    )
}

export default AdminCategories;