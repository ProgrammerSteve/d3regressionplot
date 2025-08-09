import {
  SET_DATA_X,
  SET_DATA_Y,
  RESET_DATA,
  RANDOMIZE_DATA,
  SET_ROWS,
  SetDataXAction,
  SetDataYAction,
  SetRowsAction,
  ResetDataAction,
  RandomizeDataAction,
} from '../types';


export const setDataX = (index: number, value: any): SetDataXAction => {
  return {
    type: SET_DATA_X,
    payload: { index, value },
  };
};


export const setDataY = (index: number, value: any): SetDataYAction => {
  return {
    type: SET_DATA_Y,
    payload: { index, value },
  };
};


export const setRows = (value: number): SetRowsAction => {
  return {
    type: SET_ROWS,
    payload: { value },
  };
};


export const resetData = (): ResetDataAction => {
  return {
    type: RESET_DATA,
  };
};


export const randomizeData = (): RandomizeDataAction => {
  return {
    type: RANDOMIZE_DATA,
  };
};