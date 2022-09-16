import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ConvertSliceState, GetParams } from '../types';

export const fetchConvert = createAsyncThunk<ConvertSliceState, GetParams>('convert/fetchConvert', async (params) => {
  const { from, to, amount } = params;
  try {
    const { data } = await axios({
    method: 'get',
    url: `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    headers: {
      "apikey": "UwHjzmCsXQQFGINuu7e0PEQmeA3k3a1p",
      }
    });
    console.log(data);
    return data;
  } catch (err) { 
    console.log(err);
  }
}); 