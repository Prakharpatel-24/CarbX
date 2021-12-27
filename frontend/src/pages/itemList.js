import React from "react";
import Button from "react-bootstrap/Button";
import IndividualCard from "../components/IndividualCard";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
// import noodles from "/FoodImg/noodles.jpg";
// import poha from "/FoodImg/poha.jpg";
// import dosa from "/FoodImg/dosa.jpg";
// import rice from "/FoodImg/rice.jpg";
// import paneer from "/FoodImg/paneer.jpg";
// import burgers from "/FoodImg/burgers.jpg";
// import sandwich from "/FoodImg/sandwich.jpg";
// import pizza from "/FoodImg/pizza.jpg";
// import roti from "/FoodImg/roti.jpg";
// import pulses from "/FoodImg/pulses.jpg";
// import ice from "/FoodImg/ice-cream.jpg";
// import cold from "/FoodImg/cold-drinks.jpg";
// import samosa from "/FoodImg/samosa.jpg";
// import french from "/FoodImg/french-fries.jpg";
// import blur from "/FoodImg/new2.jpg";

import "../components/IndividualCard.css";
export const itemList = () => {
  return (
    <div>
      <div className="MainCard">
        <Row xs={1} md={4} className="g-4">
          {/* IndividualCards is called and passed with values
          to create multiple food item cards  */}
          <IndividualCard
            text="Noodles"
            quantity="1 bowl"
            calorie="188"
            img_src="/FoodImg/noodles.jpg"
            nutrients="fats , carbohydrate, sodium"
          />
          {/* <IndividualCard
            text="Poha"
            quantity="1 bowl "
            calorie="180"
            img_src={poha}
            nutrients="iron, fibre, antioxidents, vitamins"
          />
          <IndividualCard
            text="Dosa"
            quantity="100gm"
            calorie="165"
            img_src={dosa}
            nutrients="carbohydrates , iron, zinc"
          />
          <IndividualCard
            text="Rice"
            quantity="1 bowl"
            calorie="130"
            img_src={rice}
            nutrients="iron , zinc, thiamin, fats"
          />
          <IndividualCard
            text="Paneer"
            quantity="53gm"
            calorie="158"
            img_src={paneer}
            nutrients="protein, fat , iron, calcium"
          />
          <IndividualCard
            text="Burger"
            quantity="1 hamburger"
            calorie="354"
            img_src={burgers}
            nutrients="protein, iron, vitamin B12 ,fats"
          />
          <IndividualCard
            text="Sandwich"
            quantity="1 piece"
            calorie="266"
            img_src={sandwich}
            nutrients="cabohydrates, protein, fats"
          />
          <IndividualCard
            text="Pizza"
            quantity="1 slice"
            calorie="150"
            img_src={pizza}
            nutrients="protein, fats, carbohydrates"
          />
          <IndividualCard
            text="Roti"
            quantity="1(6 inch)"
            calorie="71"
            img_src={roti}
            nutrients="protein, carbs, fats"
          />
          <IndividualCard
            text="French-Fries"
            quantity="100gm"
            calorie="312"
            img_src={french}
            nutrients="vitamin B6, fats"
          />
          <IndividualCard
            text="Pulses"
            quantity="1 bowl"
            calorie="104"
            img_src={pulses}
            nutrients="iron, fibre, protein"
          />
          <IndividualCard
            text="Ice-cream"
            quantity="1 scoop"
            calorie="137"
            img_src={ice}
            nutrients="fats, carbs, protein"
          />
          <IndividualCard
            text="Cold-Drink"
            quantity="1 glass"
            calorie="139"
            img_src={cold}
            nutrients="sugar"
          />
          <IndividualCard
            text="Samosa"
            quantity="1(regular)"
            calorie="252"
            img_src={samosa}
            nutrients="chlorestrol, sodium"
          /> */}
          {/* New card for add food item */}
          <Card
            className="SingleCard"
            style={{
              width: "16rem",
              boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
            }}
          >
            {/* Passing Image location  */}
            <Card.Img variant="top" src="/FoodImg/new2.jpg" />
            <Card.Body>
              <div className="CardsTitle">
                <Card.Title>Enter food item</Card.Title>{" "}
              </div>
              <Card.Text>
                Quantity - enter <br />
                Calorie Count - enter
                <br />
                Rich in - enter
              </Card.Text>
              <Button variant="outline-danger">ADD ITEM</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};
