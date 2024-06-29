import { NavBarContainer } from "./styledComponents";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavBarContainer>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '0px 1px',
          border: '1px solid black'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/habits')
        }}
      >
        Habits
      </Button>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '0px 1px',
          border: '1px solid black'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/friends')
        }}
      >
        Friends
      </Button>
      <Button
        variant="primary"
        style={{
          flex: 1,
          borderRadius: 0,
          margin: '0px 1px',
          border: '1px solid black'
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate('/profile')
        }}
      >
        My Profile
      </Button>
    </NavBarContainer>
  );
}

export default NavBar;
