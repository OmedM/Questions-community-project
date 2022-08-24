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

function Ask() {
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
                Question Form
            </Typography>
            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth margin='normal'/>
            <TextField multiline={true} rows='8' id="outlined-basic" label="Question" variant="outlined" fullWidth margin='normal'/>
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
                    {
                        categories.map(
                            (category) => {
                                return <option value={category.id}>{category.label}</option>
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