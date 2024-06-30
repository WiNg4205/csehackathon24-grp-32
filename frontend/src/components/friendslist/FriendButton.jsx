import { ButtonContainer } from "../styledComponents";

const FriendButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { username, habits } = props;
  return (
    <ButtonContainer>
      <div>
        <img
          width={'60%'}
          height={'0%'}
          alt="profile picture"
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
        />
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          {username}
        </div>
        <div style={{flex: 1}}>
          {habits}
        </div>
      </div>
    </ButtonContainer>
  );
}

export default FriendButton;
