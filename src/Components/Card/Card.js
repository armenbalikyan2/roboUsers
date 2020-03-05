import React from 'react';
import { Card, Col, Row } from 'antd';
import { url } from '../../Api/Api';

const Cards = (props) => {
    const { Meta } = Card;
    return(
    <div className = "card-wrapper">
        <Card 
            hoverable  
            style = 
            {{ 
                width: 240,
                backgroundColor: "rgb(8, 203, 238)",
                margin: "10px"
            }}
            cover = {<img alt = {props.alt} src = {`${url}/${props.src}`} />}
            bordered = {false}>
            <Meta title = {props.title}/>
        </Card>
    </div>
    )
}
export default Cards;