import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  max-height: 100vh;
  min-height: 0vh;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  overflow-y: hidden; /* Changed from 'yoverflow: hidden;' to 'overflow-y: hidden;' */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    max-height: none;
    min-height: 100vh;
    height: auto;
    overflow-y: scroll;
  }

  .chartWrapper {
    flex: 2;
    width: 100%;
  }

  .secondaryContainer {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;