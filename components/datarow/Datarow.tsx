import { DatarowContainer } from './Datarow.style';
import { useDispatch } from 'react-redux';
import { setDataX, setDataY } from '../../redux/actions/dataActions';
import React from 'react';


interface DatarowProps {
  i: number;
  x: number | string;
  y: number | string;
}

const Datarow: React.FC<DatarowProps> = ({ i, x, y }) => {
  const dispatch = useDispatch();

  const handleChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDataX(i, e.target.value));
  };

  const handleChangeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDataY(i, e.target.value));
  };

  return (
    <tr>
      <td>{i}</td>
      <td>
        <DatarowContainer type="number" min={0} onChange={handleChangeX} value={x} />
      </td>
      <td>
        <DatarowContainer type="number" min={0} onChange={handleChangeY} value={y} />
      </td>
    </tr>
  );
};

export default Datarow;