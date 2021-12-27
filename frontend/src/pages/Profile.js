import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Profile.css";
// import rio from "./FoodImg/Rio1.jpg";
import LineChart from "../components/LineChart";
import { Items } from "./itemList";

// Creating profile page with graphs
export const Profile = () => {
  return (
    <div>
      <Container className="profile">
        <Row>
          <Col className="centerAlign" sm={3}>
            <Card
              style={{
                minWidth: "16rem",
                boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
                height: "610px",
              }}
            >
              {/* Adding profile image */}
              <Image
                src="/FoodImg/Rio1.jpg"
                className="profile-pic"
                style={{
                  maxWidth: "16rem",
                  maxHeight: "16rem",
                }}
              />
              {/* User details */}
              <Card.Body>
                <Card.Title>Aníbal Cortés(Rio)</Card.Title>
                <div className="user_details">
                  Age=22
                  <br />
                  BMI=24.09
                  <br />
                  Weight=68 kg
                  <br />
                  Height=168 cm <br /> Weight goal=65 <br /> BMI goal=23 <br />{" "}
                  <br />
                </div>
                {/* Button to edit profile */}
                <Button variant="danger">Edit profile</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={9}>
            <Row>
              {/* Calorie intake graph */}
              <Card
                className="graph"
                style={{
                  width: "22rem",
                  boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
                  height: "300px",
                  width: "24rem",
                  paddingTop: "33px",
                }}
              >
                <Card.Body>
                  <LineChart
                    title={"Calories Intake"}
                    xaxis={[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ]}
                    calories={[1200, 900, 1300, 800, 700, 300, 800]}
                  />
                </Card.Body>
              </Card>
              {/* Weight Change Graph */}
              <Card
                className="graph"
                style={{
                  width: "22rem",
                  boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
                  height: "300px",
                  width: "24rem",
                  paddingTop: "33px",
                }}
              >
                <Card.Body>
                  <LineChart
                    title={"Weight Change"}
                    xaxis={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                    calories={[68, 70, 72, 69, 67, 64, 73, 77, 70, 67, 71, 74]}
                  />
                </Card.Body>
              </Card>
            </Row>
            {/* BMI Change graph */}
            <Row>
              <Card
                className="graph"
                style={{
                  width: "22rem",
                  boxShadow: "2px 2px 3px rgba(46, 46, 46, 0.62)",
                  height: "300px",
                  width: "24rem",
                  paddingTop: "33px",
                }}
              >
                <Card.Body>
                  <LineChart
                    title={"BMI"}
                    xaxis={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                    calories={[
                      23.59, 24.8, 25.51, 24.44, 23.73, 22.67, 25.86, 27.281,
                      24.8, 23.73, 25.15, 26.21,
                    ]}
                  />
                </Card.Body>
              </Card>

             
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
