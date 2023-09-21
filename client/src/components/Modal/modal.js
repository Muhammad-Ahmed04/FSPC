// import React, { useState } from "react";
import "./style.css";

// function Modal({ isOpen, onClose, onSubmit }) {
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = () => {
//     // You can perform validation here if needed
//     const competitionData = {
//       title,
//       link,
//       location,
//       date,
//     };
//     onSubmit(competitionData);
//     onClose();
//   };

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Add New Competition</h2>
//         <div className="input-container">
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="input-container">
//           <label>Link:</label>
//           <input
//             type="text"
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//           />
//         </div>
//         <div className="input-container">
//           <label>Location:</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>
//         <div className="input-container">
//           <label>Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div className="button-container">
//           <button onClick={handleSubmit}>Submit</button>
//           <button onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;



import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    // You can perform validation here if needed
    const competitionData = {
      title,
      link,
      location,
      date,
    };
    onSubmit(competitionData);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Competition</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Link:</Form.Label>
            <Form.Control
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;

