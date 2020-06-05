import React from 'react';
import { Grid, Card, Button, CardContent, Typography } from '@material-ui/core';
import './Articles.css';
import { addToCart } from './articlesSlice';
import { useDispatch } from 'react-redux';


export default function Article(props) {

    const dispatch = useDispatch();

    return (
        <Grid xs={12} sm={6} lg={4} className={"article"+props.article.id} item>
            <Card className="article-card">
                <img className="article-img" src={props.article.url} alt="article"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {props.article.title}
                    </Typography>
                    <Button className="cart-button" variant="contained" color="primary" onClick={()=>dispatch(addToCart(props.article))}>
                        ADD TO CART
                    </Button>
                </CardContent>
            </Card>
            <p></p>
        </Grid>
    )
}
