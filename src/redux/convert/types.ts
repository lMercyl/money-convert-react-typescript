export interface GetParams {
  from: string;
  to: string;
  amount: string;
}

export interface ConvertSliceState {
  value: string;
  to: string;
  from: string;
  result: number;
}