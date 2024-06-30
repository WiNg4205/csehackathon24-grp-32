import { useState } from "react";
import { FullPageFlex } from "../styledComponents";
import NavBar from "../NavBar";
import HabitButton from "./HabitButton";
import { List } from "../styledComponents";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Explore = () => {
  // const [ id ] = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FullPageFlex>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New habit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Insert description"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem'
        }}
      >
        <h2>
          Explore Page
        </h2>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{maxWidth: 'max-content'}}
        >
          Add Habit
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          border: '1px solid',
      }}>
        <List>
          {/* {
            friendsData.map((friend, key) => (
              <FriendButton
                key={key}
                onCLick={(event) => {
                  event.preventDefault();
                  navigate
                }}
                  userName={friend.name}
                  habits={friend.habits}
              />
            ))
          } */}
          <HabitButton name={'Going out with a friend'} description={'Meet up with a friend and have a chat'}/>
          <HabitButton name={'Walking'} description={'Walking somewhere'}/>
          <HabitButton name={'Play a sport'} description={'Get moving'}/>
          <HabitButton name={'Learn a new skill'} description={'Learn any skill'}/>
          <HabitButton name={'Meditate'} description={'Acquire tranquility'}/>
          <HabitButton name={'Read a book'} description={'Attain some knowledge'}/>
          <HabitButton name={'Cook a recipe'} description={'Cooking something up'}/>
        </List>
      </div>
      <NavBar />
    </FullPageFlex>
  );
}

export default Explore;
