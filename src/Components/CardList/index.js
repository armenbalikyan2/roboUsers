import React from "react";
import Card from "../Card/Card";
import "./cardList.css"

const CardList = ({ users }) => {
  return (
    <div className="cardList">
      {
        users && users.map(robot => (
          <Card key={robot} src={robot} title={robot} description={robot} />
        ))
      }
    </div>
  );
};

export default CardList;
 