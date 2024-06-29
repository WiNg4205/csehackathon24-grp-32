import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './frontend/Login.jsx';
// import { Register } from './frontend/Register.jsx';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/register' element={<Register handleSubmit={null}/>} />
        <Route path='/dashboard' element={<Dashboard handleClick={clickNewPresentation} />} />
        <Route path='/:presentationId' element={<Presentation />} />
        <Route path="*" element={<Navigate to='/login' />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
