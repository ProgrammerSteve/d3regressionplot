export const SET_DATA_X = 'SET_DATA_X';
export const SET_DATA_Y = 'SET_DATA_Y';
export const SET_ROWS = 'SET_ROWS';
export const RESET_DATA = 'RESET_DATA';
export const RANDOMIZE_DATA = 'RANDOMIZE_DATA';

// Action interfaces
export interface SetDataXAction {
  type: typeof SET_DATA_X;
  payload: { index: number; value: any };
}

export interface SetDataYAction {
  type: typeof SET_DATA_Y;
  payload: { index: number; value: any };
}

export interface SetRowsAction {
  type: typeof SET_ROWS;
  payload: { value: number };
}

export interface ResetDataAction {
  type: typeof RESET_DATA;
}

export interface RandomizeDataAction {
  type: typeof RANDOMIZE_DATA;
}

// Union type for all possible actions
export type DataActionTypes =
  | SetDataXAction
  | SetDataYAction
  | SetRowsAction
  | ResetDataAction
  | RandomizeDataAction;