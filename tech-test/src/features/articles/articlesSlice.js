import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    value: [],
  },
  reducers: {
    fetchArticles: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const { fetchArticles } = articleSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getArticles = () => dispatch => {
    
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
        // handle success
        console.log(response);
        dispatch(fetchArticles(response.data))
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
    
    /*
    dispatch(fetchArticles([{
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      }]));
      */
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const articles = state => state.articles.value;

export default articleSlice.reducer;
