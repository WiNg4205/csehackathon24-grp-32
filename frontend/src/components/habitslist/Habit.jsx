import { HabitContainer } from "../styledComponents";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Habit = () => {
  // Generate random username and streak
  const username = "User" + Math.floor(Math.random() * 1000);
  const streak = Math.floor(Math.random() * 100);

  return (
    <HabitContainer>
      <Container>
        <div>{`${username} (${streak})`}</div>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
        </Row>
      </Container>
    </HabitContainer>
  );
}

export default Habit;