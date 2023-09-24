// import React, { useState } from "react";
import "./style.css";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyModal({ isOpen, onClose, onSubmit, mode }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    // You can perform validation here if needed
    const competitionData = {
      // {mode === "competition"? title : name},
      name,
      title,
      link,
      location,
      type,
      date,
    };
    setTitle("");
    setName("");
    setLink("");
    setType("");
    setLocation("");
    setDate("");

    onSubmit(competitionData);
    onClose();
    
  };
const clearFields = () => {
    setTitle("");
    setName("");
    setLink("");
    setType("");
    setLocation("");
    setDate("");
}
  return (
    <div className="container">
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{mode === "competition"? "Upload A Competition" : "Upload A Past Paper"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>{mode === "competition"? "Title:" : "Name:"}</Form.Label>
            <Form.Control
              className="input-container"
              type="text"
              value={mode === "competition"? title: name}
              onChange={(e) => {mode === "competition" ? setTitle(e.target.value): setName(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Link:</Form.Label>
            <Form.Control
              className="input-container"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>{mode === "competition"? "Location:" : "Type:"}</Form.Label>
            <Form.Control
              className="input-container"
              type="text"
              value={mode === "competition"? location: type}
              onChange={(e) => {mode === "competition" ? setLocation(e.target.value): setType(e.target.value)}}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
            className="input-container"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="button-container">
        <Button variant="secondary" onClick={() => {onClose(); clearFields();}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default MyModal;

