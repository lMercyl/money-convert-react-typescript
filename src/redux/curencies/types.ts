export type Currencie = {
  shortName: string;
  fullName: string;
}

export interface CurenciesSliceState {
  list: Array<Currencie>;
}