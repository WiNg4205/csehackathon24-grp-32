import { useState } from "react";
import { FullPageFlex, List } from "../styledComponents";
import FriendButton from "./FriendButton";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const FriendsList = () => {
  // const [ friendsData ] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const getFriendsData = async () => {
  //     try {
  //       const getData = await apiCallAuthorised('GET', '/store');
  //       setFriendsData(getData);
  //     } catch (err) {
  //       return;
  //     }
  //   }
  //   getFriendsData();
  // }, [])

  // if (friendsData === null) {
  //   return (
  //     <FullPageFlex>
  //       <div style={{padding: '1rem'}}>
  //         <h2>
  //           Friends
  //         </h2>
  //       </div>
  //       <div
  //         style={{
  //           flex: 1,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           width: '100%',
  //           border: '1px solid',
  //       }}>
  //         <h3>No friends yet!</h3>
  //       </div>
  //       <NavBar />
  //     </FullPageFlex>
  //   )
  // }
  const navigate = useNavigate();

  const [ newFriendName, setNewFriendName ] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const userId = await axios.post( 'http://localhost:3000/login', {
        userId: localStorage.getItem('currentUserId'),
        friendUsername: newFriendName
      });
      localStorage.setItem('currentUserID', userId);
      navigate('/friends');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <FullPageFlex>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Friend Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert username"
                autoFocus
                onChange={(event) => {
                  setNewFriendName(event.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
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
          Friends
        </h2>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{maxWidth: 'max-content'}}
        >
          Add Friend
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
          <FriendButton> here1 </FriendButton>
          <FriendButton> here2 </FriendButton>
          <FriendButton> here3 </FriendButton>
          <FriendButton> here4 </FriendButton>
          <FriendButton> here5 </FriendButton>
          <FriendButton> here6 </FriendButton>
          <FriendButton> here7 </FriendButton>
          <FriendButton> here8 </FriendButton>
          <FriendButton> here9 </FriendButton>
          <FriendButton> here10 </FriendButton>
          <FriendButton> here1 </FriendButton>
          <FriendButton> here2 </FriendButton>
          <FriendButton> here3 </FriendButton>
          <FriendButton> here4 </FriendButton>
          <FriendButton> here5 </FriendButton>
          <FriendButton> here6 </FriendButton>
          <FriendButton> here7 </FriendButton>
          <FriendButton> here8 </FriendButton>
          <FriendButton> here9 </FriendButton>
          <FriendButton> here10 </FriendButton>
        </List>
      </div>
      <NavBar />
    </FullPageFlex>
  );
}

export default FriendsList;
