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
          border: '1px solid black',
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
          border: '1px solid black',
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
          border: '1px solid black',
          padding: '0px 1px'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/explore')
        }}
      >
        <p>Explore</p>
      </Button>
    </NavBarContainer>
  );
}

export default NavBar;
