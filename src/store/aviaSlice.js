import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [
    { id: 0, text: 'all transfers', checked: false },
    { id: 1, text: 'without transfers', checked: false, transfers: 0 },
    { id: 2, text: 'one transfers', checked: false, transfers: 1 },
    { id: 3, text: 'two transfers', checked: false, transfers: 2 },
    { id: 4, text: 'three transfers', checked: false, transfers: 3 },
  ],
};

export const aviaSlice = createSlice({
  name: 'aviaSales',
  initialState,
  reducers: {
    checkboxConfig: (state, action) => {
      const checkboxId = action.payload;

      const allChecked = state.filters.every((filter) => filter.checked);

      if (checkboxId === 0) {
        return {
          ...state,
          filters: state.filters.map((el) => ({
            ...el,
            checked: !allChecked,
          })),
        };
      }

      const updatedFilters = state.filters.map((el) =>
        el.id === checkboxId ? { ...el, checked: !el.checked } : el,
      );

      const allFiltersChecked = updatedFilters
        .slice(1)
        .every((filter) => filter.checked);

      return {
        ...state,
        filters: updatedFilters.map((el) =>
          el.id === 0 ? { ...el, checked: allFiltersChecked } : el,
        ),
      };
    },
  },
});

export const { checkboxConfig } = aviaSlice.actions;

export default aviaSlice.reducer;
