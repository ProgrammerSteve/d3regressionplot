import {
  SET_DATA_X,
  SET_DATA_Y,
  RESET_DATA,
  RANDOMIZE_DATA,
  SET_ROWS
} from '../types'

export const setDataX=(index,value)=>{
  return({
    type: SET_DATA_X,
    payload: {index,value},
  })
}
export const setDataY=(index,value)=>{
  return({
    type: SET_DATA_Y,
    payload: {index,value},
  })
}
export const setRows=(value)=>{
  return({
    type: SET_ROWS,
    payload: {value},
  })
}
export const resetData=()=>{
  return({
    type: RESET_DATA,
    payload: {},
  })
}
export const randomizeData=()=>{
  return({
    type: RANDOMIZE_DATA,
    payload: {},
  })
}
