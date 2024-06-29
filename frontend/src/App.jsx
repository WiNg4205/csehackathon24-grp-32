import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import FriendsList from './components/friendslist/FriendsList.jsx';
import Profile from './components/profile/Profile.jsx';
import Dashboard from './components/Dashboard.jsx';
import Physical from './components/habits/physical.jsx';
import Mental from './components/habits/mental.jsx';
import Intellectual from './components/habits/intellectual.jsx';
import Social from './components/habits/social.jsx';
import Financial from './components/habits/financial.jsx';
import Spiritual from './components/habits/spiritual.jsx';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register handleSubmit={null}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/friends' element={<FriendsList />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/habits/physical' element={<Physical />} />
        <Route path='/habits/mental' element={<Mental />} />
        <Route path='/habits/intellectual' element={<Intellectual />} />
        <Route path='/habits/social' element={<Social />} />
        <Route path='/habits/financial' element={<Financial />} />
        <Route path='/habits/spiritual' element={<Spiritual />} />
        <Route path="*" element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
