import { ButtonContainer } from "../styledComponents";

const HabitButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, description } = props;
  return (
    <ButtonContainer
      onClick={(event) => {
        event.preventDefault();
        // handleClick();
      }}
    >
      <div>
        {name}
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          <h5>Description</h5>
        </div>
        <div style={{flex: 1}}>
          {description}
        </div>
      </div>
    </ButtonContainer>
  );
}

export default HabitButton;
