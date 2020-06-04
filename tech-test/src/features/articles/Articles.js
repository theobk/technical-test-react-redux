import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, articles, articlesToShow, showMore } from './articlesSlice';
import { Button } from '@material-ui/core';
import Article from './Article';


export function Articles() {
    const currentArticles = useSelector(articlesToShow);
    const dispatch = useDispatch();

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur

        if(currentArticles.length === 0){
            dispatch(getArticles())
        }
        console.log(currentArticles)

    });

    const articles = currentArticles.map((art) => <Article article={art} />)


    return (
        <div className="articles">
            {articles}
            <Button variant="contained" color="primary" onClick={() => dispatch(showMore())}>
                LOAD MORE
            </Button>
        </div>
    )
}
