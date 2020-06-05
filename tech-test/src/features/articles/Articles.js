import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, articlesToShow, showMore } from './articlesSlice';
import { Container, Button, Grid } from '@material-ui/core';
import Article from './Article';

import './Articles.css';


export function Articles() {
    const currentArticles = useSelector(articlesToShow);
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentArticles.length === 0){
            dispatch(getArticles())
        }
    });

    const articles = currentArticles.map((art) => <Article article={art} key={art.id} />)

    return (
        <Container className="articles" maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
                >
                {articles}
            </Grid>
            <Button className="load-more" variant="contained" color="primary" onClick={() => dispatch(showMore())} size="large">
                LOAD MORE
            </Button>
        </Container>
    )
}
