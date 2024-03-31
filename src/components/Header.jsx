/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Alluserprofile from "./AlluserProfile";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import OurPlans from "./OurPlans";

function Header({ showAnimation, mybgclass }) {
  const headerRef = useRef(null);

  const [mynav, setMynav] = useState(false);

  const mynavbar = () => {
    setMynav(!mynav);
  };

  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (showAnimation) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const header = headerRef.current;

        if (currentScrollY > 0) {
          if (prevScrollY < currentScrollY && currentScrollY > 630) {
            header.classList.remove("myheadercolor");
            header.classList.add("myheader");
            header.classList.add("mt-4");
            header.hidden = true;
          } else {
            header.classList.add("myheadercolor");
            header.classList.add("myheader");
            header.classList.remove("mt-4");
            header.hidden = false;
          }

          setPrevScrollY(currentScrollY);
        } else {
          header.classList.remove("myheadercolor");
          header.classList.add("myheader");
          header.classList.add("mt-4");
          header.hidden = false;
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollY, showAnimation]);

  return (
    <>
      {/* {showAnimation} */}
      <header
        ref={headerRef}
        className={`container-fluid fixed-top ${mynav ? "headertog" : ""}`}
        style={{ backgroundColor: `${mybgclass}` }}
      >
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="logoimg">
              <Link className="navbar-brand me-auto " to="/">
                <img src="image/logo3.png" className="" alt="" />
              </Link>
            </div>

            <div className="">
              <button
                className={`navbar-toggler shadow-none menu-bars ${
                  mynav ? "mynavtogchange" : ""
                } `}
                type="button"
                onClick={mynavbar}
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="menu-bars"
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </button>

              <div
                className={`collapse ${
                  mynav ? "mynavcollapsefull" : ""
                }  navbar-collapse text-center`}
                id="navbarSupportedContent"
              >
                <ul
                  className={`navbar-nav   ${
                    mynav ? "mynavcollapse" : ""
                  }  mb-2 mb-lg-0 lato-regular`}
                >
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* <!-- Button trigger modal --> */}
                <div className={`${mynav ? "mb-4" : ""}`}>
                  <Link
                    type="button"
                    className="btn btn btn-danger ms-3 text-light"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    type="button"
                    to="/register"
                    className="btn btn btn-danger text-light ms-2"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

// <!-- Button trigger modal -->

function Header2({ showAnimation2, mybgclass2 }) {
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [mynav, setMynav] = useState(false);

  const mynavbar = () => {
    setMynav(!mynav);
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (showAnimation2) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const header = headerRef.current;

        if (currentScrollY > 0) {
          if (prevScrollY < currentScrollY && currentScrollY > 630) {
            header.classList.remove("myheadercolor");
            header.classList.add("myheader");
            header.classList.add("mt-4");
            header.hidden = true;
          } else {
            header.classList.add("myheadercolor");
            header.classList.add("myheader");
            header.classList.remove("mt-4");
            header.hidden = false;
          }

          setPrevScrollY(currentScrollY);
        } else {
          header.classList.remove("myheadercolor");
          header.classList.add("myheader");
          header.classList.add("mt-4");
          header.hidden = false;
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollY, showAnimation2]);

  return (
    <>
      <header
        ref={headerRef}
        className={`container-fluid fixed-top ${mynav ? "headertog" : ""}`}
        style={{ backgroundColor: `${mybgclass2}` }}
      >
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="logoimg">
              <Link className="navbar-brand me-auto " to="/home2">
                <img src="image/logo3.png" className="" alt="" />
              </Link>
            </div>

            <div>
              <button
                className={`navbar-toggler shadow-none menu-bars ${
                  mynav ? "mynavtogchange " : ""
                } `}
                type="button"
                onClick={mynavbar}
                data-bs-toggle={`collapse`}
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="menu-bars"
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </button>

              <div
                className={`collapse ${
                  mynav ? "mynavcollapsefull" : ""
                }  navbar-collapse text-center`}
                id={!mynav ? "navbarSupportedContent" : ""}
              >
                <ul
                  className={`navbar-nav   ${
                    mynav ? "mynavcollapse2 mt-3" : ""
                  }  mb-2 mb-lg-0 lato-regular`}
                >
                  <div className="d-flex gap-3">
                    <li className="nav-item lato-bold menu">
                      <Link className="nav-link active text-light" to="/home2">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item lato-bold menu">
                      <Link className="nav-link active text-light" to="/about2">
                        About
                      </Link>
                    </li>
                    <li className="nav-item lato-bold menu">
                      <Link
                        className="nav-link active text-light"
                        to="/acontact"
                      >
                        Contact
                      </Link>
                    </li>
                  </div>

                  <div className="d-flex gap-3">
                    <li className="nav-item lato-bold menu">
                      <Link
                        className="nav-link active text-light"
                        to="/saveprofile"
                      >
                        WishList
                      </Link>
                    </li>

                    <li className="nav-item lato-bold menu">
                      <Link
                        className="nav-link active text-light"
                        to="/recommendationall"
                      >
                        All Matches
                      </Link>
                    </li>
                  </div>
                </ul>

                {/* <!-- Button trigger modal --> */}
                <div className={`${mynav ? "mb-4" : ""}`}>
                  <button
                    type="button"
                    className="border-0 home2btn p-2 px-3 rounded-pill text-light"
                  >
                    Log Out
                  </button>

                  {/* <button
                    type="button"
                    
                    className="border-0 p-2 home2btn btn rounded-pill ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add Profile
                    <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                  </button> */}

                  <Button
                    type="button"
                    className="border-0 p-2 home2btn btn rounded-pill ms-2"
                    onClick={handleShow}
                  >
                    Add Profile
                    <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                All Profiles
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-body text-center">
                <Link
                  type="button"
                  to="/mainregister"
                  className="border-0 p-2 home2btn btn rounded-pill ms-2"
                  onClick={() => {
                    document.getElementById("staticBackdrop").modal("hide");
                  }}
                >
                  Add Profile
                  <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                </Link>
              </div>
              <Alluserprofile />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">All Profiles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body text-center">
            <Link
              to="/mainregister"
              className="border-0 p-2 home2btn btn rounded-pill ms-2"
              onClick={handleClose}
            >
              Add Profile
              <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
            </Link>
          </div>
          <Alluserprofile />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { Header, Header2 };
