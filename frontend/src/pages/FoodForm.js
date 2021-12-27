import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./FoodForm.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// form to add food item
export const FoodForm = () => {
  return (
    <Row className="mainCard">
      <Card
        style={{
          width: "37rem",
          boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
        }}
      >
        <Card.Body>
          <Card.Title>Form to add food item</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Food Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <br />
              <Row>
                <Col sm={4}>
                  <Form.Label>Quantity</Form.Label>
                </Col>
                <Col sm={8}>
                  <Form.Control placeholder="Enter quantity" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <Form.Label>Calorie Count</Form.Label>
                </Col>
                <Col sm={8}>
                  <Form.Control placeholder="Enter calorie count" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <Form.Label>Rich in</Form.Label>
                </Col>
                <Col sm={8}>
                  <Form.Control placeholder="Enter nutrients" />
                </Col>
              </Row>
              <br />
              <br />
              <Row className="rowCenter">
                <Col sm={4}></Col>
                <Col sm={4}>
                  <Row>
                    <Button variant="outline-danger" type="submit">
                      Submit
                    </Button>{" "}
                  </Row>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};
