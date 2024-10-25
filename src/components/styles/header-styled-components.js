import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; // Center items vertically
  background-color: #282c34;
  color: white;
  height: 10vh;
  padding-left: 16px;
  padding-right: 16px;
`

const HeaderButton = styled.button`
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #21a1f1;
  }
`

export { HeaderWrapper, HeaderButton }