import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const AddLogItem = ({addItem}) => {
  const [text, SetText] = useState("");
  const [phone, SetPhone] = useState("");
  const [language, SetLanguage] = useState("");
  const [comment, SetComment] = useState("");
  const onSubmit = (e) =>{
      e.preventDefault()
      addItem({text,phone,language,comment})
      SetText('')
      SetPhone('')
      SetLanguage('')
      SetComment('')
  }
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Name"
                value={text}
                onChange={(e) => SetText(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
            
              <Form.Control
                placeholder="Phone"
                value={phone}
                onChange={(e) => SetPhone(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={language}
                onChange={(e) => SetLanguage(e.target.value)}
              >
                <option value ="0">Select Language</option>
                <option value ="ge">ge</option>
                <option value ="en">en</option>
                <option value ="ru">ru</option>

              </Form.Control>
            </Col>
          </Row> 
          <Row className="my-3">
          <Col>
            <Form.Control
              placeholder="Comment"
              value={comment}
              onChange={(e) => SetComment(e.target.value)}
            />
          </Col>
        </Row>
          <Row className="my-3">
            <Col>
            <Button type="submit" variant="info" block>
            Add
            </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLogItem;
