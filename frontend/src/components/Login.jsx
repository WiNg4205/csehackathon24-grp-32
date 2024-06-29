import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from './Error';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { apiCallBody } from '../api';
// import { checkStringInput } from '../helper.js';
import { StyledContainer, FullPageCentered } from './styledComponents.jsx';

const Login = () => {
  // const navigate = useNavigate();
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage] = useState('');
  // const [errorVisible, setErrorVisible] = useState(false);
  const [errorVisible] = useState(false);

  // const handleShowError = () => setErrorVisible(true);
  // const handleCloseError = () => setErrorVisible(false);

  // const submitLogin = async () => {
  //   if (!checkStringInput([userEmail, userPassword])) {
  //     handleShowError();
  //     setErrorMessage('One or more fields are empty.');
  //     return;
  //   }

  //   try {
  //     const postResult = await apiCallBody('POST', '/admin/auth/login', {
  //       email: userEmail,
  //       password: userPassword
  //     });
  //     if (postResult.error) {
  //       handleShowError();
  //       setErrorMessage(postResult.error);
  //       return;
  //     }
  //     const userData = JSON.stringify({
  //       token: postResult.token,
  //       email: userEmail
  //     });
  //     localStorage.setItem('currentUser', userData);
  //     navigate('/dashboard');
  //   } catch (err) {
  //     handleShowError();
  //     setErrorMessage(err);
  //   }
  // }

  return (
    <FullPageCentered>
      <Error
        show={errorVisible}
        // handleCloseError={handleCloseError}
        handleCloseError={(event) => event.preventDefault()}
        message={errorMessage}
      />
      <StyledContainer>
        <Form
          id='loginForm'
          onSubmit={(event) => {
            event.preventDefault();
            // submitLogin()
          }}
        >
          <h2>Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              // onChange={(event) => setUserEmail(event.target.value)}
              onChange={(event) => event.preventDefault()}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              // onChange={(event) => setUserPassword(event.target.value)}
              onChange={(event) => event.preventDefault()}
            />
          </Form.Group>
          <Button className="mb-3" variant="primary" type="submit" form='loginForm'>Submit</Button>
          <div>
            Don&apos;t have an account yet? Sign up <Link to={'/register'}>here!</Link>
          </div>
        </Form>
      </StyledContainer>
    </FullPageCentered>
  );
}

export default Login;
