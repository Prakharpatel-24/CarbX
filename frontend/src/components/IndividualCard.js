import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./IndividualCard.css";

const IndividualCard = (props) => {
  return (
    <div>
      {/* This is the card template from which all food cards will be made */}
      <Card
        className="SingleCard gCard"
        style={{
          width: "16rem",
          boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
        }}
      >
        {/* Passing the image loaction and other card characteristics as props */}
        <Card.Img variant="top" src={props.img_src} />
        <Card.Body>
          <div className="CardsTitle">
            <Card.Title>{props.text}</Card.Title>{" "}
          </div>
          <Card.Text>
            Quantity - {props.quantity} <br />
            Calorie Count - {props.calorie}
            <br />
            Rich in - {props.nutrients}
          </Card.Text>
          {/* Card button */}
          <Button variant="outline-success">INTAKED TODAY</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IndividualCard;
