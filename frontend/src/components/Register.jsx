import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from './Error.jsx';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  min-width: fit-content;
  width: 30%;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 1.1rem;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export const FullPageCentered = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`


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
    <FullPageCentered>
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
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
    </FullPageCentered>
  );
}

export default Register;
