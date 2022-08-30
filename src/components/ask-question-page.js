import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../redux/categories-slice.js';
import { getCategories } from '../API/api.js';

function Ask() {
    const [categories, setCategories] = React.useState();

    const dispatch = useDispatch();

    const category = useSelector((state) => state.categories.categories);

    React.useEffect(() => {
        refresh();
    }, [])

    const refresh = async () => {
        try {
        const res =  await axios.get(getCategories)
            setCategories(res.data.categories)
            dispatch(categoriesActions.adminCategoriesList(res.data.categories));
        }
        catch (errors) {
        alert('Something went wrong!')
        }
    }

    return (
        <Box
            sx={{
                width: '60%',
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
                Question Form
            </Typography>
            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth margin='normal'/>
            <TextField multiline={true} rows='8' id="outlined-basic" label="Question" variant="outlined" fullWidth margin='normal'/>
            <FormControl fullWidth margin='normal'>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Category
                </InputLabel>
                <NativeSelect
                    defaultValue={100}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                    }}
                >
                    <option disabled value={100}>Select a category</option>
                    {
                        category.map(
                            (category) => {
                                return <option key={category.id} value={category.id}>{category.name}</option>
                            }
                        )
                    }
                </NativeSelect>
            </FormControl>
            <ButtonGroup 
                fullWidth
                sx={{
                    marginTop: 2
                }}
            >
                <Button
                    variant='outlined'
                    color='error'
                    size='large'
                    fullWidth={true}
                    margin="normal"
                    startIcon={<DeleteIcon />}
                >
                    Discard
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    fullWidth={true}
                    margin="normal"
                    startIcon={<DoneIcon />}
                >
                    Finish
                </Button>
            </ButtonGroup>
        </Box>
    )
}

export default Ask;