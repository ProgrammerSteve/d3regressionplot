import {
    SET_DATA_X,
    SET_DATA_Y,
    RESET_DATA, 
    SET_ROWS,
    RANDOMIZE_DATA
} from '../types'

const initialState = {
    dataX:[7,21,34,52,71],
    dataY:[3,30,40,45,73],
    numRows:30,
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_DATA_X:{
            let newArrX=[...state.dataX.slice(0)];
            let newArrY=[...state.dataY.slice(0)];
            newArrX[action.payload.index]=+action.payload.value;
            if(!newArrY[action.payload.index]){
                newArrY[action.payload.index]=""
            }
            return {
                ...state,
                dataX:newArrX,
                dataY:newArrY,  
            }
        }
        case SET_DATA_Y:{
            let newArrX=[...state.dataX.slice(0)];
            let newArrY=[...state.dataY.slice(0)];
            newArrY[action.payload.index]=+action.payload.value;
            if(!newArrX[action.payload.index]){
                newArrX[action.payload.index]=""
            }
            return{
              ...state,
              dataX:newArrX,
              dataY:newArrY
            }
        }
        case SET_ROWS:{
            return{
                ...state,
                numRows:action.payload.value
            }     
        }       
        case RESET_DATA:{
            return{
                ...state,
                dataX:[0,0],
                dataY:[0,0],
                numRows:30,
            }
        }
        case RANDOMIZE_DATA:{
            const newArr=[];
            for (let i=0;i<state.numRows;i++){
                newArr.push(i)
            }
            let randomX=newArr.map(int=>Math.floor(Math.random()*100))
            let randomY=newArr.map(int=>Math.floor(Math.random()*100))
            return{
                ...state,
                dataX:randomX,
                dataY:randomY
            }
        }
        default: return state
    }
}