// import { useState } from "react";
import { FullPageFlex, List } from "../styledComponents";
import Habit from "./Habit";
import NavBar from "../NavBar";
// import { useNavigate } from "react-router-dom";

const HabitsList = () => {
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
          Walking
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
          <Habit> here1 </Habit>
          <Habit> here2 </Habit>
          <Habit> here3 </Habit>
          <Habit> here4 </Habit>
          <Habit> here5 </Habit>
          <Habit> here6 </Habit>
          <Habit> here7 </Habit>
          <Habit> here8 </Habit>
          <Habit> here9 </Habit>
          <Habit> here10 </Habit>
          <Habit> here1 </Habit>
          <Habit> here2 </Habit>
          <Habit> here3 </Habit>
          <Habit> here4 </Habit>
          <Habit> here5 </Habit>
          <Habit> here6 </Habit>
          <Habit> here7 </Habit>
          <Habit> here8 </Habit>
          <Habit> here9 </Habit>
          <Habit> here10 </Habit>
        </List>
      </div>
      <NavBar />
    </FullPageFlex>
  );
}

export default HabitsList;
