import styled, {css} from 'styled-components';
export const ScatterContainer=styled.div`



display: inline-block;
position: relative;
width: 100%;
height: 100%;
/* padding-bottom: 100%; */
vertical-align: top;
overflow: hidden;

& .svg-content{
  background-color: #728172;
  display: inline-block;
  position: absolute;
  width:100%;
  height: 100%;
  top: 0;
  left:0;

}



/* background-color: green; */

& .regressionline {
  fill: none;
  stroke: #3b4456;
  stroke-width: 3;
}
& .axis{
  color: #000000;
  stroke-width:5px;
}
& .tickmark-numbers{
  fill: black;
  font-size: 20px;
}
& .axis-grid-background-color{
  fill: rgba(247, 226, 226, 0.5);
}
& .equationText{
  fill:black;
  font-family: "Helvetica";
  font-size: 20px;
}
& .titleText{
  fill:black;
  font-family: "Helvetica";
  text-anchor: middle;
  font-size: 30px;
}
& .AxisText{
  fill:black;
  font-family: "Helvetica";
  font-size: 20px;
  text-anchor: middle;
  font-family: Arial, Helvetica, sans-serif;
}

`
