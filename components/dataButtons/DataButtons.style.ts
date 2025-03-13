import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;

  button {
    flex: 1;
    padding: 10px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    transition: opacity 0.2s ease;
    font-size: 14px;
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
  }
`;