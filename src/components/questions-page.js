import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OutlinedCard from './question-card.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getCategories } from '../API/api.js';
import { getQuestions } from '../API/api.js';
import { categoriesActions } from '../redux/categories-slice.js'
import { questionActions } from '../redux/question-slice.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories.categories);
  const question = useSelector((state) => state.questions.questions);

  React.useEffect(() => {
    getCategoriesData();
    getQuestionsData();
  }, [])

  const getCategoriesData = async () => {
      try {
      const res =  await axios.get(getCategories)
          dispatch(categoriesActions.adminCategoriesList(res.data.categories));
      }
      catch (errors) {
      alert('Something went wrong!')
      }
  }

  const getQuestionsData = async () => {
    try {
      const res =  await axios.get(getQuestions)
          dispatch(questionActions.questions(res.data.questions));
    }
    catch (errors) {
      alert('Something went wrong!')
    }
}

  return (
    <Box sx={{ width: '100%', marginTop: 0.5 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant='scrollable'>
          {
            category.map(
              (category) => {
                return (
                  <Tab label={category.name} {...a11yProps(category.id)} key={category.id}/>
                )
              }
            )
          }
        </Tabs>
      </Box>
      {
        category.map(
          (category) => {
            return (
              <TabPanel value={value} index={category.id} key={category.id}>
                {
                  question.map(
                    (question) => {
                      return (
                        <p key={question.categoryId}>{question.id + question.question}</p>
                      )
                    }
                  )
                }
              </TabPanel>
            )
          }
        )
      }
    </Box>
  );
}
