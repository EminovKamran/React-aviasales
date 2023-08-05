import { configureStore } from '@reduxjs/toolkit';

import aviaSlice from './aviaSlice';

export const store = configureStore({
  reducer: {
    aviaSlice,
  },
});

export default store;
