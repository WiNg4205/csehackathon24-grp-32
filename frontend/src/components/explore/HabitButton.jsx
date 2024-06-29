import { ButtonContainer } from "../styledComponents";

const HabitButton = () => {
  // const { handleClick } = props;
  return (
    <ButtonContainer
      onClick={(event) => {
        event.preventDefault();
        // handleClick();
      }}
    >
      <div>
        Habit name here
        {/* {habit.name} */}
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 1}}>
          <h5>Description</h5>
        </div>
        <div style={{flex: 1}}>
          Habit description blah blah blah blah
          {/* {habit.description} */}
        </div>
      </div>
    </ButtonContainer>
  );
}

export default HabitButton;
