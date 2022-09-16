import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConvertSliceState } from './types';
import { fetchConvert } from './async/fetchConvert';

const initialState: ConvertSliceState = {
  to: "",
  from: "",
  value: "",
  result: 0
};

const ConvertSlice = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    setResult(state: ConvertSliceState, action: PayloadAction<number>) {
      state.result = action.payload;
    },
    setTo(state: ConvertSliceState, action: PayloadAction<string>) {
      state.to = action.payload;
    },
    setFrom(state: ConvertSliceState, action: PayloadAction<string>) {
      state.from = action.payload;
    },
    setValue(state: ConvertSliceState, action: PayloadAction<string>) {
      state.value = action.payload;
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchConvert.pending, (state: ConvertSliceState, action: PayloadAction) => {
      state.result = 0;
    });
    builder.addCase(fetchConvert.fulfilled, (state: ConvertSliceState, action: PayloadAction<any>) => {
      state.result = Math.round(action.payload.result);
    });
    builder.addCase(fetchConvert.rejected, (state: ConvertSliceState, action: PayloadAction) => {
      state.result = 0;
    });
  } 
})

export const { setResult, setTo, setFrom, setValue } = ConvertSlice.actions;

export default ConvertSlice.reducer