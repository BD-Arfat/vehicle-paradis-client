import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/Api/ApiSlice';
import filterReducer from '../features/Filters/FilterSlices';
import tagsReducer from '../features/Tags/TagsSlices';
import productsReducer from '../features/Products/ProductSlice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    products : productsReducer,
    filter : filterReducer,
    tags : tagsReducer,
  },
  middleware : (getDefaultMiddlewars)=>getDefaultMiddlewars().concat(apiSlice.middleware)
});
