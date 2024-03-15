import { useEffect, useState, useRef } from "react";

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
              <a className="navbar-brand me-auto " href="#">
                <img src="image/logo3.png" className="" alt="" />
              </a>
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
                    <a className="nav-link active text-light" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      Contact
                    </a>
                  </li>

                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      Our Plans
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Help
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item ms-2"> */}

                  {/* <button type="button" className="btn btn-danger text-light">
                      Login
                    </button> */}

                  {/* 
                    <button  type="button" className="btn ms-2 me-2 btn-danger text-light">
                     SignUp
                    </button> */}

                  {/* </li> */}
                </ul>

                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn btn-danger text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Login
                </button>

                {/* <button
                  type="button"
                  onClick={lala}
                  className="btn btn btn-danger text-light"
                >
                  Sign Up
                </button> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Modal --> */}

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
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 col-lg-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control  shadow-none "
                />
              </div>

              <div className="mb-3 col-lg-12">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control  shadow-none "
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
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
              <a className="navbar-brand me-auto " href="#">
                <img src="image/logo3.png" className="" alt="" />
              </a>
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
                    <a className="nav-link active text-light" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      Contact
                    </a>
                  </li>

                  <li className="nav-item lato-bold menu">
                    <a className="nav-link active text-light" href="#">
                      Our Plans
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Help
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="border-0 home2btn p-2 px-4 rounded-pill text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Sign Out
                </button>

                <button className="border-0 p-2 home2btn rounded-pill ms-2">
                  Add Profile
                  <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Modal --> */}
    </>
  );
}

export  { Header, Header2 };
