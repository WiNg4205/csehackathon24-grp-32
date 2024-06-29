import styled from 'styled-components';

export const StyledContainer = styled.div`
  min-width: fit-content;
  width: 30%;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 1.1rem;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export const FullPageFlex = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const List = styled.div`
  width: 45%;
  height: 500px;
  overflow-y: scroll;
`

export const FriendButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  min-height: fit-content;
  border-radius: 0;
  border: 1px solid rgb(158, 158, 158);
  margin: 5px 0;
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  height: 50px;
`
