import React from "react";
import Card from "./Card/Card";

const CardList = ({ robots }) => (
  <div>
    {robots.map(robot => (
      <Card key={robot.id} alt={robot.id} src={robot.username} title={robot.username} description = {robot} />
    ))}
  </div>
);

export default CardList;
