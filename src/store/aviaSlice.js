import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

import AviaService from '../Service/AviaService';

const initialState = {
  filters: [
    { id: 0, text: 'Все', checked: false },
    { id: 1, text: 'Без пересадок', checked: false, transfers: 0 },
    { id: 2, text: '1 пересадка', checked: false, transfers: 1 },
    { id: 3, text: '2 пересадки', checked: false, transfers: 2 },
    { id: 4, text: '3 пересадки', checked: false, transfers: 3 },
  ],
  status: null,
  error: null,
  tickets: [],
};

export const fetchAvia = createAsyncThunk(
  'aviaSales/fetchAvia',
  async (_, { rejectWithValue }) => {
    try {
      const body = await AviaService();
      return body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const aviaSlice = createSlice({
  name: 'aviaSales',
  initialState,
  reducers: {
    checkboxConfig: (state, action) => {
      const checkboxId = action.payload;

      const allChecked = state.filters.every((filter) => filter.checked);

      if (checkboxId === 0) {
        state.filters = state.filters.map((el) => ({
          ...el,
          checked: !allChecked,
        }));
      }

      const updatedFilters = state.filters.map((el) =>
        el.id === checkboxId ? { ...el, checked: !el.checked } : el,
      );

      const allFiltersChecked = updatedFilters
        .slice(1)
        .every((filter) => filter.checked);

      state.filters = updatedFilters.map((el) =>
        el.id === 0 ? { ...el, checked: allFiltersChecked } : el,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvia.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAvia.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.tickets = action.payload.tickets.map((ticket) => ({
          id: uniqid(),
          ...ticket,
        }));
      })
      .addCase(fetchAvia.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { checkboxConfig } = aviaSlice.actions;

export default aviaSlice.reducer;
