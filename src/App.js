import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './components/main-page';
import LoginPage from './components/login-page.js';
import SignUpPage from './components/sign-up-page.js';
import ErrorPage from './components/error-page.js';
import UserPage from './components/user-page.js';
import QuestionPage from './components/questions-page.js';
import Ask from './components/ask-question-page.js';
import AdminCategories from './components/admin-categories.js';
import AdminUsers from './components/admin-users.js';
import Welcome from './components/welcome-page.js'

function App() {
  return (
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='sign-up' element={<SignUpPage />}/>
        <Route path='main' element={<MainPage />}>
          <Route path='welcome' element={<Welcome />}/>
          <Route path='user' element={<UserPage />}/>
          <Route path='questions' element={<QuestionPage />}/>
          <Route path='ask-question' element={<Ask />}/>
          <Route path='admin-users' element={<AdminUsers />}/>
          <Route path='admin-categories' element={<AdminCategories />}/>
        </Route>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
  )
};

export default App;