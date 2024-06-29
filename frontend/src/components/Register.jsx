import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from './Error.jsx';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { StyledContainer, FullPageFlex } from './styledComponents.jsx';


const Register = () => {
  // const { handleSubmit } = props;
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [userName, setUserName] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage] = useState('');
  // const [errorVisible, setErrorVisible] = useState(false);
  const [errorVisible] = useState(false);
  // const navigate = useNavigate();

  // const handleShowError = () => setErrorVisible(true);
  // const handleCloseError = () => setErrorVisible(false);

  return (
    <FullPageFlex>
      <Error
        show={errorVisible}
        // handleCloseError={handleCloseError}
        handleCloseError={(event) => event.preventDefault()}
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
          onSubmit={(event) => event.preventDefault()}
        >
          <h2>Register</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              // onChange={(event) => setUserEmail(event.target.value)}
              onChange={(event) => event.preventDefault()}
            />
          </Form.Group>
          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                // onChange={(event) => setUserName(event.target.value)}
                onChange={(event) => event.preventDefault()}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                // onChange={(event) => setUserName(event.target.value)}
                onChange={(event) => event.preventDefault()}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              // onChange={(event) => setUserName(event.target.value)}
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
        <Button className="mb-3" variant="primary" type="submit" form='registrationForm'>Submit</Button>
        <div>
          Already have an account? Login <Link to={'/login'}>here!</Link>
        </div>
      </StyledContainer>
    </FullPageFlex>
  );
}

export default Register;
