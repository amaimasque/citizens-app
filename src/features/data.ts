import { createSlice } from "@reduxjs/toolkit";
import { City, Country, State } from "../types/api";

type DataSliceInitialType = {
  countries: Country[] 
  states: State[]
  cities: City[]
};

const initialState: DataSliceInitialType = {
  countries: [],
  states: [],
  cities: []
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      return {...state, countries: action.payload}
    },
    setStates: (state, action) => {
      return {...state, states: action.payload}
    },
    setCities: (state, action) => {
      return {...state, cities: action.payload}
    }
  }
})

export const {setCountries, setStates, setCities} = dataSlice.actions

export default dataSlice.reducer