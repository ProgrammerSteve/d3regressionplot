import { DataContainer } from "./Dataentry.style";
import Datarow from "../datarow/Datarow";
import { useSelector } from "react-redux";



const Dataentry=()=>{
  const {dataX,dataY,numRows} = useSelector(state => state.data)
  const dataVals=()=>{
    let indexArr=[]
    for(let i=0;i<numRows;i++){
      indexArr.push( <Datarow key={`datarow-key-${i}`}  i={i} x={dataX[i]?dataX[i]:""} y={dataY[i]?dataY[i]:""}/>)
    }
    return indexArr
  }
  return(
    <DataContainer>
      <table>
        <tbody>
          <tr>
            <th>No</th><th>x</th><th>y</th>
          </tr>
          {dataVals()}
        </tbody>
      </table>
    </DataContainer>
  )
}
export default Dataentry;