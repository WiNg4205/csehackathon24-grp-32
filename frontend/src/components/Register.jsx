import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from './Error.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { StyledContainer, FullPageFlex } from './styledComponents.jsx';
import axios from 'axios';


const Register = () => {
  // const { handleSubmit } = props;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();

  const handleShowError = () => setErrorVisible(true);
  const handleCloseError = () => setErrorVisible(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post( 'http://localhost:3000/register', {
        email: email,
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
      });
      console.log('register response = ', response)
    } catch (error) {
      console.error('Error submitting data:', error);
      setErrorMessage(error);
      handleShowError();
    }
  };

  return (
    <FullPageFlex>
      <Error
        show={errorVisible}
        handleCloseError={handleCloseError}
        message={errorMessage}
      />
      <StyledContainer>
        <Form
          id='registrationForm'
          // onSubmit={async (event) => {
          //   event.preventDefault();
          //   try {
          //     await handleSubmit(userEmail, userPassword, confirmPassword, userName);
          //     navigate('/dashboard');
          //   } catch (error) {
          //     handleShowError();
          //     setErrorMessage(error.toString());
          //   }
          // }}
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/dashboard');
          }}
        >
          <h2>Register</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              // onChange={(event) => setConfirmPassword(event.target.value)}
              onChange={(event) => event.preventDefault()}
            />
          </Form.Group>
        </Form>
        <Button className="mb-3" variant="primary" type="submit" form='registrationForm' onClick={handleSubmit}>Submit</Button>
        <div>
          Already have an account? Login <Link to={'/login'}>here!</Link>
        </div>
      </StyledContainer>
    </FullPageFlex>
  );
}

export default Register;
