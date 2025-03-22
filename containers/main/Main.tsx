import Scatterplot from '../../components/scatterplot/Scatterplot';
import Dataentry from '../../components/dataentry/Dataentry';
import DataButtons from '../../components/dataButtons/DataButtons';
import { MainContainer } from './Main.style';
import React from 'react';


const Main = () => {
  return (
    <MainContainer>
      <div className="chartWrapper">
        <Scatterplot chartHeight={600} chartWidth={600} marginTop={50} marginBottom={50} />
      </div>
      <div className="secondaryContainer">
        <DataButtons />
        <Dataentry />
      </div>
    </MainContainer>
  );
};

export default Main;