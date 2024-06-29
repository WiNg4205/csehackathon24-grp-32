import { NavBarContainer } from "./styledComponents";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavBarContainer>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '1px 1px',
          border: '1px solid black',
          height: '12vh',
          padding: '0px 1px'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/dashboard')
        }}
      >
        <p>Habits</p>
      </Button>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '1px 1px',
          border: '1px solid black',
          height: '12vh',
          padding: '0px 1px'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/friends')
        }}
      >
        <p>Friends</p>
      </Button>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '1px 1px',
          border: '1px solid black',
          height: '12vh',
          padding: '0px 1px'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/profile')
        }}
      >
        <p>My Profile</p>
      </Button>
    </NavBarContainer>
  );
}

export default NavBar;
