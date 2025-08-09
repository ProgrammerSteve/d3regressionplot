import {
  DataActionTypes,
  SET_DATA_X,
  SET_DATA_Y,
  RESET_DATA,
  SET_ROWS,
  RANDOMIZE_DATA,
} from '../types';


export interface DataState {
  dataX: Array<number | string>;
  dataY: Array<number | string>;
  numRows: number;
}

const initialState: DataState = {
  dataX: [7, 21, 34, 52, 71],
  dataY: [3, 30, 40, 45, 73],
  numRows: 30,
};


export default function dataReducer(
  state: DataState = initialState,
  action: DataActionTypes
): DataState {
  switch (action.type) {
    case SET_DATA_X: {
      const newArrX = [...state.dataX];
      const newArrY = [...state.dataY];
      newArrX[action.payload.index] = +action.payload.value;
      if (!newArrY[action.payload.index]) {
        newArrY[action.payload.index] = '';
      }
      return {
        ...state,
        dataX: newArrX,
        dataY: newArrY,
      };
    }
    case SET_DATA_Y: {
      const newArrX = [...state.dataX];
      const newArrY = [...state.dataY];
      newArrY[action.payload.index] = +action.payload.value;
      if (!newArrX[action.payload.index]) {
        newArrX[action.payload.index] = '';
      }
      return {
        ...state,
        dataX: newArrX,
        dataY: newArrY,
      };
    }
    case SET_ROWS: {
      return {
        ...state,
        numRows: action.payload.value,
      };
    }
    case RESET_DATA: {
      return {
        ...state,
        dataX: [0, 0],
        dataY: [0, 0],
        numRows: 30,
      };
    }
    case RANDOMIZE_DATA: {
      const newArr: number[] = [];
      for (let i = 0; i < state.numRows; i++) {
        newArr.push(i);
      }
      const randomX = newArr.map(() => Math.floor(Math.random() * 100));
      const randomY = newArr.map(() => Math.floor(Math.random() * 100));
      return {
        ...state,
        dataX: randomX,
        dataY: randomY,
      };
    }
    default:
      return state;
  }
}