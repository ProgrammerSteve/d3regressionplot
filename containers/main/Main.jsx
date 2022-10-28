import Scatterplot from '../../components/scatterplot/Scatterplot'
import Dataentry from '../../components/dataentry/Dataentry'
import DataButtons from '../../components/dataButtons/DataButtons'
import { MainContainer } from './Main.style'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { setDataX,setDataY } from '../../redux/actions/dataActions'






export default function Main() {
  const {dataX,dataY} = useSelector(state => state.data)

  // const scatterPlotFunc=()=>{
  //     if(typeof window!== "undefined"){
  //       return <Scatterplot 
  //       chartHeight={window.innerHeight}
  //       chartWidth={window.innerWidth/2}
  //       marginTop={100}
  //       marginBottom={100}  
  //     ></Scatterplot>
  //     }else{
  //       return <></>
  //     }
  // }
  // const dispatch=useDispatch();
  // const handleAddX=(x)=>dispatch(setDataX(ind,val))
  useEffect(()=>{

  },[])

  return (
    <MainContainer>
      <Scatterplot 
        chartHeight={700}
        chartWidth={700}
        marginTop={50}
        marginBottom={50}  
      ></Scatterplot>
      <div className='secondaryContainer'>
        <DataButtons/>
        <Dataentry/>
      </div>
    </MainContainer>
  )
}