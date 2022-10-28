import { ButtonContainer } from "./DataButtons.style";
import { useSelector,useDispatch } from "react-redux";
import { setRows,resetData } from "../../redux/actions/dataActions";


const DataButtons=()=>{
  const dispatch=useDispatch();
  const {numRows} = useSelector(state => state.data)
  const incrementRows=()=>dispatch(setRows(numRows+1))
  const decrementRows=()=>(numRows>1)?dispatch(setRows(numRows-1)):null;
  const resetToInitial=()=>dispatch(resetData())

  return(
      <ButtonContainer className="button-container">
        <button className="rowButton" onClick={incrementRows}>+</button>
        <button className="rowButton" onClick={decrementRows}>-</button>
        <button onClick={resetToInitial}>clear</button>
      </ButtonContainer>
  )
}
export default DataButtons;