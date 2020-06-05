import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from '../articles/articlesSlice';
import { List, ListItem, ListItemAvatar, ListItemText, Dialog, DialogTitle, Badge, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCart } from '../articles/articlesSlice';
import './Cart.css';


export default function Cart(props) {
    const dispatch = useDispatch();
    const cartArticles = useSelector(cart);

    const { onClose, open } = props;

    const handleClose = () => {
      onClose();
    };
  
    const handleListItemClick = (article) => {
      console.log(article)
    };

    const clearCart = () => {
        cartArticles.forEach(article => dispatch(removeFromCart(article)))
    };
    

    return (   <Dialog className="cart" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                    <DialogTitle id="simple-dialog-title">Your cart</DialogTitle>
                    
                    {cartArticles.length !== 0
                    ?
                    <>
                    <List>
                     {cartArticles.map((article) => (
                        <ListItem className="cart-article" onClick={() => handleListItemClick(article)} key={article.id}>
                            <ListItemAvatar className="cart-article-img">
                                <img src={article.thumbnailUrl} alt="article"></img>
                            </ListItemAvatar>
                            <ListItemText className="cart-article-title" primary={article.title} />
                            <IconButton className="cart-article-delete" color="inherit" onClick={() => dispatch(removeFromCart(article))}>
                                <Badge>
                                    <DeleteIcon />
                                </Badge>
                            </IconButton>
                        </ListItem>
                    ))}
                    </List>
                    <Button className="cart-clear" variant="contained" color="error" onClick={() => clearCart()}>
                    CLEAR
                    </Button>
                    </> 
                    :   <h3 className="empty-cart">Your cart is currently empty</h3>
                    }
                    
                    
                </Dialog>)
}
