import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';

export default configureStore({
  reducer: {
    articles: articlesReducer
  },
});
