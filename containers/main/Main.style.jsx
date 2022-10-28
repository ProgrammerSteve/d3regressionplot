import styled from 'styled-components'

export const MainContainer=styled.div`
display:flex;

flex-direction: column;
background-color: #728172;
height: 100vh;
align-items: center;
justify-content: center;


@media (min-width: 600px) {
  flex-direction:row;
  align-items: center;
  justify-content: center;

  & .secondaryContainer{
    display:flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    justify-content: start;
  }
}

@media screen and (max-width: 599px) {

  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  justify-content: center;

  & .secondaryContainer{
    display:flex;
    flex-direction: column;
    width: 100vw;
    height: 40%;
    justify-content: start;
  }
}
`

