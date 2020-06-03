import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, articles } from './articlesSlice';

export function Articles() {
    const currentArticles = useSelector(articles);
    const dispatch = useDispatch();


    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur

        if(currentArticles.length === 0){
            dispatch(getArticles())
        }

        console.log(currentArticles)

    });


    return (
        <p>Check la console</p>
    )
}
