import { ButtonContainer } from "../styledComponents";

const FriendButton = () => {
  // const { userName, habits } = props;
  return (
    <ButtonContainer>
      <div>
        pfp here
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          {/* {userName} */}
          user name here
        </div>
        <div style={{flex: 1}}>
          {/* {() => {
            let string = '';
            for (let habit of habits) {
              string += habit.name;
            }
            return string;
          }} */}
          habits here
        </div>
      </div>
    </ButtonContainer>
  );
}

export default FriendButton;
