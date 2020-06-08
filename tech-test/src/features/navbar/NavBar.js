import React from 'react';
import { AppBar, Typography, IconButton, Toolbar, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { cart } from '../articles/articlesSlice';
import Cart from './Cart';
import Search from './Search';


export default function NavBar() {

    const cartArticles = useSelector(cart);

    const [openCart, setOpenCart] = React.useState(false);
    const [openSearch, setOpenSearch] = React.useState(false);

    const handleClickOpen = () => {
        setOpenCart(true);
    };
    
    const handleClose = () => {
        setOpenCart(false);
    };

    const handleClickOpenSearch = () => {
        setOpenSearch(true);
    };
    
    const handleCloseSearch = () => {
        setOpenSearch(false);
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
                <IconButton className="search-icon" color="inherit" onClick={handleClickOpenSearch}>
                    <Badge color="secondary">
                        <SearchIcon />
                    </Badge>
                </IconButton>
                </Toolbar>
                <Search open={openSearch}  onClose={handleCloseSearch}/>
                <Cart open={openCart} onClose={handleClose} />
            </AppBar>)
}
