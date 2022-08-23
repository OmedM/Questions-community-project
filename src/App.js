import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './components/main-page';
import LoginPage from './components/login-page.js';
import ErrorPage from './components/error-page.js';
import UserPage from './components/user-page.js';
import Sidebar from './components/sidebar.js';
import QuestionPage from './components/questions-page.js';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='main' element={<MainPage />}>
          <Route path='user' element={<UserPage />}/>
          <Route path='questions' element={<QuestionPage />}/>
          <Route path='ask-question' element={<MainPage />}/>
        </Route>
      </Routes>
  )
};

export default App;