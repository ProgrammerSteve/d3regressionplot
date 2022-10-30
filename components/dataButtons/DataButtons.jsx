import { ButtonContainer } from "./DataButtons.style";
import { useSelector,useDispatch } from "react-redux";
import { setRows,resetData,randomizeData } from "../../redux/actions/dataActions";


const DataButtons=()=>{
  const dispatch=useDispatch();
  const {numRows} = useSelector(state => state.data)
  const incrementRows=()=>dispatch(setRows(numRows+1))
  const decrementRows=()=>(numRows>1)?dispatch(setRows(numRows-1)):null;
  const handleReset=()=>dispatch(resetData())
  const handleRandomize=()=>dispatch(randomizeData())

  return(
      <ButtonContainer className="button-container">
        <button className="rowButton" onClick={incrementRows}>+</button>
        <button className="rowButton" onClick={decrementRows}>-</button>
        <button className="large-button" onClick={handleReset}>clear</button>
        <button className="large-button" onClick={handleRandomize}>random</button>
      </ButtonContainer>
  )
}
export default DataButtons;