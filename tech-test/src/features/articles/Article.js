import React from 'react';


export default function Article(props) {

    return (
        <div className="article">
            <p>{props.article.id}</p>
        </div>
    )
}
