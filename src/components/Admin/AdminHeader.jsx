import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
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
          //   header.classList.add("mt-4");
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
        // header.classList.add("mt-4");
        header.hidden = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <div className="admin">
      <header ref={headerRef} className="container-fluid">
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

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default AdminHeader;
