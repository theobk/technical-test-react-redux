import React from 'react';
import { Grid, Card, Button, CardContent, Typography } from '@material-ui/core';
import { addToCart } from './articlesSlice';
import { useDispatch } from 'react-redux';


export default function Article(props) {

    const dispatch = useDispatch();

    var xs = 12;
    var sm = 6;
    var lg = 4;

    return (
        <Grid xs={xs} sm={sm} lg={lg} className={"article"+props.article.id} item>
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
