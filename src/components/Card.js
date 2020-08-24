import React from "react";
import { Card, CardTitle, CardBody } from "shards-react";

import "../css/card.css";
const DefaultCard = (props) => {
  return (
    <Card className="card">
      <CardTitle>{props.title}</CardTitle>
      <CardBody>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <p>{props.tech[0]}</p>
          <p>{props.tech[1]}</p>
          <p>{props.tech[2]}</p>
          <p>{props.tech[3]}</p>
          <p>{props.tech[4]}</p>
        </div>
      </CardBody>
      <div className="imgContainer">
        <img src={props.img} className="images" alt="Project screenshot"/>
      </div>
    </Card>
  );
};

export default DefaultCard;
