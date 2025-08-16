import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  box-sizing: border-box;

  /* Mobile-first: stack vertically, compact spacing */
  @media (max-width: 767px) {
    height: 100vh;
    overflow: hidden;
    padding: 8px;
    gap: 8px;
    
    .chartWrapper {
      flex: 0 0 auto;
      height: 45vh;
      min-height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .secondaryContainer {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
    }
  }

  /* Tablet and desktop: side by side, no vertical scrolling */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    padding: 20px;
    gap: 20px;
    height: 100vh;
    overflow: hidden;
    
    .chartWrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 0;
    }
    
    .secondaryContainer {
      flex: 0 0 350px;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
  }

  /* Large screens: give more space to chart */
  @media (min-width: 1200px) {
    .secondaryContainer {
      flex: 0 0 400px;
    }
  }
`;