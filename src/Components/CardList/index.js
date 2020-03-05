import React from "react";
import Card from "../Card/Card";

const CardList = ({ users }) => {
  return (
    <div style = {{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
      {users && users.map(robot => (
        <Card key = {robot} src = {robot} title = {robot} description = {robot} />
      ))}
    </div>
  );
};

export default CardList;
 