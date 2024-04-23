import { createSlice } from '@reduxjs/toolkit';
import { INITAL_STATE } from './contactsSlice';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;