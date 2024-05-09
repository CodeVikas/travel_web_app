import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate(); // Import and use useNavigate hook

  const handleLogout = () => {
    localStorage.removeItem('token');

    // Close the modal after logout
    setShow(false);

    // Redirect the user to the login page
    navigate("/");
  };

  const handleClose = () => {
    navigate("/adminnews");
    setShow(false);
  };

  useEffect(() => {
    setShow(true); // This opens the modal immediately
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LogoutButton;
