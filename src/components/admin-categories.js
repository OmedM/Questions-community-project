import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import { categories } from './question-categories.js';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';

function AdminCategories() {
    return (
        <Box
            sx={{
                width: '40%',
                padding: '5% 30%',
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
            <TextField id="outlined-basic" label="New category" variant="outlined" fullWidth margin='normal'/>
            <Button
                    variant='contained'
                    size='large'
                    fullWidth={true}
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
                <NativeSelect
                    defaultValue={"Select a Category"}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                    }}
                >
                    <option selected>Select a category</option>
                    {
                        categories.map(
                            (category) => {
                                return <option value={category.id}>{category.label}</option>
                            }
                        )
                    }
                </NativeSelect>
            </FormControl>
                <Button
                    variant='outlined'
                    color='error'
                    size='large'
                    fullWidth={true}
                    margin="normal"
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
        </Box>
    )
}

export default AdminCategories;