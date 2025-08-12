import { ButtonContainer } from './DataButtons.style';
import { useSelector, useDispatch } from 'react-redux';
import { setRows, resetData, randomizeData } from '../../redux/actions/dataActions';
import React from 'react';


const DataButtons: React.FC = () => {
  const dispatch = useDispatch();
  const { numRows } = useSelector((state: any) => state.data);

  const incrementRows = () => dispatch(setRows(numRows + 1));
  const decrementRows = () => {
    if (numRows > 1) {
      dispatch(setRows(numRows - 1));
    }
  };
  const handleReset = () => dispatch(resetData());
  const handleRandomize = () => dispatch(randomizeData());

  return (
    <ButtonContainer>
      <button className="plusButton" onClick={incrementRows} aria-label="Add row">
        +
      </button>
      <button className="minusButton" onClick={decrementRows} aria-label="Remove row">
        -
      </button>
      <button className="clearButton" onClick={handleReset} aria-label="Clear data">
        clear
      </button>
      <button className="randomButton" onClick={handleRandomize} aria-label="Randomize data">
        random
      </button>
    </ButtonContainer>
  );
};

export default DataButtons;