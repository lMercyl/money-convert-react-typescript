import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Currencie, CurenciesSliceState } from './types';
import { fetchCurencies } from './async/fetchCurencies';

const initialState: CurenciesSliceState = {
  list: [],
};

const CurenciesSlice = createSlice({
  name: 'curencies',
  initialState,
  reducers: {
    setCurencies(state: CurenciesSliceState, action: PayloadAction<Array<Currencie>>) {
      state.list = action.payload;
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchCurencies.pending, (state: CurenciesSliceState, action: PayloadAction) => {
      state.list = [];
    });
    builder.addCase(fetchCurencies.fulfilled, (state: CurenciesSliceState, action: PayloadAction<any>) => {
      if (action.payload.symbols) {
        state.list = Object.keys(action.payload.symbols).map((item) => ({ shortName: item, fullName: action.payload.symbols[item] }));
      }
    });
    builder.addCase(fetchCurencies.rejected, (state: CurenciesSliceState, action: PayloadAction) => {
      state.list = [];
    });
  } 
})

export const { setCurencies } = CurenciesSlice.actions;

export default CurenciesSlice.reducer