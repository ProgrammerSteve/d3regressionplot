import styled from 'styled-components';

<<<<<<< HEAD
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;

  button {
    flex: 1;
    padding: 10px;
=======

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  /* Mobile: compact layout with smaller buttons */
  @media (max-width: 767px) {
    gap: 4px;
    margin-bottom: 8px;
    
    /* Very small screens: 2x2 grid */
    @media (max-width: 480px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
  }

  /* Desktop: normal spacing */
  @media (min-width: 768px) {
    gap: 8px;
    margin-bottom: 16px;
  }

  button {
    flex: 1;
>>>>>>> 94694ae (refactored styling and cleaned up code)
    font-weight: 600;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
<<<<<<< HEAD
    transition: opacity 0.2s ease;
    font-size: 14px;
=======
    transition: all 0.2s ease;
  }

  /* Mobile: compact buttons */
  @media (max-width: 767px) {
    button {
      padding: 8px 4px;
      font-size: 12px;
      min-height: 32px;
      border-radius: 4px;
    }
  }

  /* Desktop: comfortable buttons */
  @media (min-width: 768px) {
    button {
      padding: 12px 8px;
      font-size: 14px;
      min-height: 44px;
      border-radius: 6px;
    }
>>>>>>> 94694ae (refactored styling and cleaned up code)
  }

  button.plusButton {
    background-color: #10b981; /* emerald green */
  }

  button.minusButton {
    background-color: #ef4444; /* red for removal */
  }

  button.clearButton {
    background-color: #6b7280; /* neutral grey */
  }

  button.randomButton {
    background-color: #6366f1; /* indigo */
  }

  button:hover {
    opacity: 0.9;
<<<<<<< HEAD
=======
    transform: translateY(-1px);
  }

  button:active {
    transform: translateY(0);
>>>>>>> 94694ae (refactored styling and cleaned up code)
  }
`;