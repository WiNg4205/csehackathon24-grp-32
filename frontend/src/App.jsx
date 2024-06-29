import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import FriendsList from './components/FriendsList/FriendsList.jsx';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register handleSubmit={null}/>} />
        <Route path='/friends' element={<FriendsList />} />
        <Route path="*" element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
