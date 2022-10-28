import styled from "styled-components";
export const DataContainer=styled.div`
  background-color: red;
  width: 100%;
  max-height: 95vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & table{
    width:100%;
    margin-inline: auto;
    background-color: black;
  }
  & table th, & table td{
    text-align: center;
    background-color: #d0d098;
  }
`