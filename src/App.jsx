import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import 'antd/dist/antd.css';
import { UserProvider } from './context/UserContext/UserState';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
