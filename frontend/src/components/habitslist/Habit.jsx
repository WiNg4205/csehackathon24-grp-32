import { HabitContainer } from "../styledComponents";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Habit = () => {
  // const { userName, habits } = props;
  return (
    <HabitContainer>
      <div>
      <Container>
        user name + streak here
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
        </Row>
      </Container>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          {/* {() => {
            let string = '';
            for (let habit of habits) {
              string += habit.name;
            }
            return string;
          }} */}
          image here
        </div>
      </div>
    </HabitContainer>
  );
}

export default Habit;
