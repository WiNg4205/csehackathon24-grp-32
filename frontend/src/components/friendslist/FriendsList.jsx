// import { useState } from "react";
import { FullPageFlex, List } from "../styledComponents";
import FriendButton from "./FriendButton";
import NavBar from "../NavBar";
// import { useNavigate } from "react-router-dom";

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

  return (
    <FullPageFlex>
      <div style={{padding: '1rem'}}>
        <h2>
          Friends
        </h2>
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
