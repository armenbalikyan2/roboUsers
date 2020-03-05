import React from 'react';
import { Card } from 'antd';
import { url } from '../../Api/Api';
import "./card.css"

const Cards = (props) => {
    const { Meta } = Card;
    return(
    <div className = "card-container">
        <Card 
            className= "card"
            hoverable  
            cover={
                <img alt={props.alt} src={`${url}/${props.src}`} />
            }
            bordered={false}>
            <Meta title={props.title}/>
        </Card>
    </div>
    )
}
export default Cards;