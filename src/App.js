import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './components/main-page';
import LoginPage from './components/login-page.js';
import ErrorPage from './components/error-page.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/main' element={<MainPage />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>

  );
}

export default App;