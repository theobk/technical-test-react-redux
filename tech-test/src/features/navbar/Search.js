import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { articles } from '../articles/articlesSlice';
import { TextField, Dialog, DialogTitle, Container, Grid, Button } from '@material-ui/core';
import Article from '../articles/Article'
import './Search.css';


export default function Search(props) {
    const allArticles = useSelector(articles);

    const [searchStr, setSearchStr] = React.useState("");
    const [searchArticles, setSearchArticles] = React.useState([]);


    /*

    */

    const { onClose, open } = props;

    const handleClose = () => {
        clearSearch();
        onClose();
    };
  
    const clearSearch = () => {
        // Reload component
        setSearchStr("");
        setSearchArticles([]);
    };

    function searchFromStr() {
        console.log(searchStr)
        const searchRes = allArticles.reduce((res, article) => { 
            if(article.title.includes(searchStr)){
                console.log(article);
                res.push(article);
            }
            return res;
        }, [])

        console.log(searchRes)

        setSearchArticles(searchRes);
    }

    const searchedArticles = searchArticles.map((art) => <Article article={art} key={art.id} mini />)
    

    return (   <Dialog className="search" onClose={handleClose} aria-labelledby="simple-dialog-title" maxWidth={false} open={open}>
                    <DialogTitle id="simple-dialog-title">Search articles</DialogTitle>
                    <Container className="articles" maxWidth="lg">
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={4}
                            className="search-articles"
                            > 
                            <Grid xs={6} className="search-txtField" item> 
                                <TextField
                                    id="standard-textarea"
                                    value={searchStr}
                                    onChange={(e) => {
                                        setSearchStr(e.target.value)
                                    }}
                                />
                                <Button className="search-btn" onClick={() => searchFromStr()}>
                                Search
                                </Button>
                            </Grid> 
                            <Grid xs={6} className="search-clear-div" item>
                                <Button className="search-clear" variant="contained" onClick={() => clearSearch()}>
                                CLEAR
                                </Button>   
                            </Grid> 
                            {searchedArticles}
                        </Grid>
                    </Container>               
                </Dialog>)
}
