import styled from "styled-components";

export const ButtonContainer=styled.div`
  width: 100%;
  height: 5vh;
  margin-inline:auto;
  display: flex;
  justify-content: center;
  & button{
    width:10%;
  }
  &  button:last-child{
    width:80%;
  }  
`