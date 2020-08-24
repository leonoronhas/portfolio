import React from "react";
import { Card, CardTitle, CardImg, CardBody } from "shards-react";

import "../css/card.css";
const DefaultCard = (props) => {
  return (
    <Card className="card">
      <CardTitle>{props.title}</CardTitle>
      <CardBody>
        <div style={{display: "flex", flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <p>{props.tech[0]}</p>
          <p>{props.tech[1]}</p>
          <p>{props.tech[2]}</p>
          <p>{props.tech[3]}</p>
          <p>{props.tech[4]}</p>
          </div>
      </CardBody>
      <CardImg bottom src={props.img} />
    </Card>
  );
};

export default DefaultCard;
