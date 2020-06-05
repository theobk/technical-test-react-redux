import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    value: [],
    toShow: [],
    cart: []
  },
  reducers: {
    fetchArticles: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload;
    },
    toShowArticles: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.toShow = action.payload;
    },
    showMoreArticles: (state, action) => {
        const newNbToShow = state.toShow.length + 15

        if(newNbToShow <= state.value.length){
            state.toShow = state.toShow.concat(state.value.slice(state.toShow.length,newNbToShow))
        }
        else {
            state.toShow = state.value;
        }
    },
    addToCartAction: (state, action) => {
        state.cart.push(action.payload);
    },
    removeFromCartAction: (state, action) => {
        const newCart = state.cart.reduce((res, article) => { 
            if(article.id !== action.payload.id){
                res.push(article);
            }
            return res;
        }, [])

        state.cart = newCart;
    },
  },
});

export const { fetchArticles } = articleSlice.actions;
export const { toShowArticles } = articleSlice.actions;
export const { showMoreArticles } = articleSlice.actions;
export const { addToCartAction } = articleSlice.actions;
export const { removeFromCartAction } = articleSlice.actions;


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getArticles = () => dispatch => {
    
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
        // handle success
        dispatch(fetchArticles(response.data))
        dispatch(showMoreArticles())
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
};


export const showMore = () => dispatch => {
    dispatch(showMoreArticles())
};

export const addToCart = (article) => dispatch => {
    dispatch(addToCartAction(article))
};

export const removeFromCart = (article) => dispatch => {
    dispatch(removeFromCartAction(article))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const articles = state => state.articles.value;

export const articlesToShow = state => state.articles.toShow;
export const cart = state => state.articles.cart;

export default articleSlice.reducer;
