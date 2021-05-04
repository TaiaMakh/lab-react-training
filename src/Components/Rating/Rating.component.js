import React from 'react';

const Rating = (props) =>{
    let stars = "☆☆☆☆☆".split("")
    const { children } = props;
    let rate = Math.round(children*1);
    for(let i=0; i < rate; i++){
        stars[i] = "★";
    }
    return(
        <p>{stars.join(" ")}</p>
    )
}

export default Rating;