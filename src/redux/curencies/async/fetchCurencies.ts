import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurenciesSliceState } from '../types';

export const fetchCurencies = createAsyncThunk<CurenciesSliceState>('curencies/fetchCurencies', async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: "https://api.apilayer.com/exchangerates_data/symbols",
      headers: {
        apikey: "UwHjzmCsXQQFGINuu7e0PEQmeA3k3a1p"
      },
    });
    return data;
  } catch (err) { 
    console.log(err);
  }
}); 