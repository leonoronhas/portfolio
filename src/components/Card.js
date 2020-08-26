import React from "react";
import { Card, CardTitle, CardBody } from "shards-react";

import "../css/card.css";

const DefaultCard = (props) => {
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardTitle className="cardTitle">
          {
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ textAlign: "start" }}>{props.title}</div>

                <div style={{ textAlign: "end" }}>
                  <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/leonoronhas/portfolio/master/src/images/githubBlack.png"
                      alt="Github logo"
                    />
                  </a>
                </div>
              </div>
              <strong>
                <p>________________________</p>
              </strong>
            </div>
          }
        </CardTitle>
        <CardBody className="cardBody">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <p>{props.tech[0] + " |"}</p>
            <p>{props.tech[1] + " |"}</p>
            <p>{props.tech[2] + " |"}</p>
            <p>{props.tech[3] + " |"}</p>
            <p>{props.tech[4]}</p>
          </div>
        </CardBody>
        <div className="imgContainer">
          <img src={props.img} className="images" alt="Project screenshot" />
        </div>
      </Card>
    </div>
  );
};

export default DefaultCard;
