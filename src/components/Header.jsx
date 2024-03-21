import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import OurPlans from "./OurPlans";

function Header() {
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
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
  }, [prevScrollY]);

  return (
    <>
      <header ref={headerRef} className="container-fluid fixed-top">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="logoimg">
              <Link className="navbar-brand me-auto " to="/">
                <img src="image/logo3.png" className="" alt="" />
              </Link>
            </div>

            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0 lato-regular">
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

                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light"  to="/ourplan">
                      Our Plans
                    </Link>
                  </li>
                </ul>

                {/* <!-- Button trigger modal --> */}
                <Link
                  type="button"
                  className="btn btn btn-danger text-light"
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
        </nav>
      </header>
    </>
  );
}

// <!-- Button trigger modal -->

function Header2() {
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
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
  }, [prevScrollY]);

  return (
    <>
      <header ref={headerRef} className="container-fluid fixed-top">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="logoimg">
              <Link className="navbar-brand me-auto " to="/home2">
                <img src="image/logo3.png" className="" alt="" />
              </Link>
            </div>

            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0 lato-regular">
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/home2">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link
                      className="nav-link active text-light"
                      to="/home2/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/contact">
                      WishList
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/recommendationall">
                      All Matches
                    </Link>
                  </li>

                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/ourplan">
                      Our Plans
                    </Link>
                  </li>
                </ul>

                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="border-0 home2btn p-2 px-3 rounded-pill text-light"
                >
                  Log Out
                </button>

                <button
                  type="button"
                  // to="/mainregister"
                  className="border-0 p-2 home2btn btn rounded-pill ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Add Profile
                  <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
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
      </div>
    </>
  );
}

export { Header, Header2 };
