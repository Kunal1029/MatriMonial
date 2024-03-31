import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PopUp1() {
  const [timeoutStarted, setTimeoutStarted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutStarted(true);
      setShow(true); // Launching the modal automatically when timeout starts
    }, 1000); // 2 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (timeoutStarted) {
      const hideTimeoutId = setTimeout(() => {
        setTimeoutStarted(false);
        setShow(false); // Hiding the modal after 5 seconds
      }, 5000); // 5 seconds

      return () => {
        clearTimeout(hideTimeoutId);
      };
    }
  }, [timeoutStarted]);

  return (
    <div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        centered
        animation={true}
        // className={show ? "modal fade show" : "modal fade"}
      >
        <Modal.Header className="m-auto ">
          <Modal.Title>
            <h1 className="poph1 mt-4 mb-3">
              Mahor gaware vaishyasamaj apka swagat karta hai
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center popimg">
            <img src="image/god.jpg" className="w-75" alt="Timeout Image" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PopUp1;
