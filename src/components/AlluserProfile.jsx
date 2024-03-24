/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OurPlans from "./OurPlans";
// import axios from "axios";
// import { getUserDetails } from './userUtils';

export default function AlluserProfile() {
  // const userDetails = getUserDetails();
  // console.log(userDetails.user_id)
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [cards, setCards] = useState([]);
  const [isCtn, setIsCtn] = useState(true);

  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  // useEffect(() => {

  //   const fetchData=()=>{
  //     axios
  //       .get(`http://localhost:3010/users/getprofilebyuser/${userDetails.user_id}`)
  //       .then((response) => {
  //         if (response.data.success) {
  //           setCards(response.data.data);

  //         } else {
  //           setErrors("Invalid email or password.");// Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); //Display error message
  //       });
  //   }
  //     fetchData();

  // }, [prevScrollY]);

  return (
    <>
      <div className="card col-md-4 col-12 ShowfullCard">
        <div className="text-center">
          {/* <img src={`image/${card.name.toLowerCase()}.jpg`} className="card-img-top" alt="..." /> */}
          <img src={`/image/salman.jpg`} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <p className="card-text">
            <b>Name</b> : kunal
            <br />
            <b>DOB</b> : Nahi pata
          </p>
        </div>

        {/* <div className="card-btn text-center mb-3">
              <Register text="More details.." />
            </div> */}

        <div className="card-btn text-center mb-3">
          <Link
            to={`/home2`}
            onClick={handleClick}
            id="myctn"
            className={`${isCtn ? "myctn" : "mybtn"}`}
          >
            More details..
          </Link>
        </div>

        <div className="card-btn text-center mb-3">
          <Button variant="primary" onClick={handleShow}>
            Delete
          </Button>
        </div>
      </div>

      {/* react modal */}

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        centered
        aria-labelledby="deleteprofile"
      >
        <Modal.Header closeButton>
          <Modal.Title><h4>Are you Sure ?</h4> </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
           <h5 className="text-danger">Warning! You will Lost your data</h5> 
        </Modal.Body>
        <Modal.Footer className="d-flex gap-5">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" className="btn btn-danger" onClick={handleClose}>
            Delete Anyways
          </Button>
          
        </Modal.Footer>
      </Modal>
      {/* react modal end */}

    
    </>
  );
}

// export { AlluserProfile };

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function AlluserProfile() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default AlluserProfile;
