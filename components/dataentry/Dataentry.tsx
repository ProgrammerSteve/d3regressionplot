import { DataContainer } from './Dataentry.style';
import Datarow from '../datarow/Datarow';
import { useSelector } from 'react-redux';
import React from 'react';


const Dataentry: React.FC = () => {
  const { dataX, dataY, numRows } = useSelector((state: any) => state.data);

  const dataVals = () => {
    const rows: React.ReactElement[] = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        <Datarow
          key={`datarow-key-${i}`}
          i={i}
          x={dataX[i] ?? ''}
          y={dataY[i] ?? ''}
        />
      );
    }
    return rows;
  };

  return (
    <DataContainer>
      <table>
        <tbody>
          <tr>
            <th>No</th>
            <th>x</th>
            <th>y</th>
          </tr>
          {dataVals()}
        </tbody>
      </table>
    </DataContainer>
  );
};

export default Dataentry;