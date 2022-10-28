import { DatarowContainer } from "./Datarow.style"
import { useDispatch } from "react-redux"
import { setDataX,setDataY } from "../../redux/actions/dataActions"

const Datarow=({i,x,y})=>{
  const dispatch=useDispatch();
  const handleChangeX=(e)=>dispatch(setDataX(i,e.target.value))
  const handleChangeY=(e)=>dispatch(setDataY(i,e.target.value))
  return(
    <tr>
      <td>{i}</td>
      <td><DatarowContainer type="number" min={0} onChange={handleChangeX} value={x}/></td>
      <td><DatarowContainer type="number" min={0} onChange={handleChangeY} value={y} /></td>
    </tr>
  )
}
export default Datarow;