import React from 'react';
import { AppBar, Typography, IconButton, Toolbar, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { cart } from '../articles/articlesSlice';
import Cart from './Cart';


export default function NavBar() {

    const cartArticles = useSelector(cart);

    const [openCart, setOpenCart] = React.useState(false);

    const handleClickOpen = () => {
        setOpenCart(true);
    };
    
    const handleClose = () => {
        setOpenCart(false);
    };

    return ( <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    My Marketplace
                </Typography>
                <IconButton className="shopping-cart" color="inherit" onClick={handleClickOpen}>
                    <Badge badgeContent={cartArticles.length} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                </Toolbar>
                <Cart open={openCart} onClose={handleClose} />
            </AppBar>)
}
