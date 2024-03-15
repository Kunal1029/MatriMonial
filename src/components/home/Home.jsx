// import Try from "../Entry/Try";
import Register from "../Register";
import Recommendation from "../Recommendation";
import ShaadhiFilter from "../ShaadhiFilter";
import { Header } from "../Header";


function Home() {
  return (
    <>
      
      <Header />
       
      <div className="container-fluid oneD text-center">
        {/* <!--  searchbar --> */}

        {/* <div className="mycontainer w-25 searchfilter text-center">
          <div id="mysearch" className="mb-4">
            <i className="fa-solid lato-thin fa-magnifying-glass fa-2xl text-white"></i>
          </div>

          <form className="d-flex " id="mysearchform" role="search">
            <input
              id="searchInput"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              hidden
            />
            <button
              id="searchButton"
              className="btn btn-outline-success"
              type="submit"
              hidden
            >
              Search
            </button>
          </form>
        </div> */}

        {/* <!-- commenting searchbar --> */}

        <div className="hone w-100">
          <p className="lato-bold">Best Platform for Vaishy samaja shaadi</p>
        </div>

        <div className="filter w-100 mt-2">
          <ShaadhiFilter />
        </div>
      </div>

      {/* <Try /> */}
      {/* modal */}

      <button
        hidden
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#mymodal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="mymodal"
        aria-labelledby="mymodalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="mymodalLabel">
                Why are You here ?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Again I&rsquo;m asking Why are you asking here ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}

      {/* Recommandation */}

      <div className="mt-5 mb-5">
        <Recommendation />

        <div className="recombtn">
          <Register text="See More"/>
        </div>
      </div>

      

      <div className="hr mycontainer mt-5 text-danger">
        <hr />
      </div>
       
      {/* Recommandation end */}

      <div className="second mt-5">
        <div className="mycontainer secpart text-center">
          <p className="lato-black mb-4">Why Us?</p>
          <span className="lato-regular">
            Genuine Profiles | Safe & Secure | Best Recommendation
          </span>
        </div>

        {/* <!-- circle flip cards --> */}

        {/*  flip  */}
        <div className="fullcard mycontainer mt-5">
          <div className="mt-3 col-lg-4 col-md-5 col-sm-9 col-12">
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2 className="lato-light mt-3 text-danger">
                    Complete Family Information
                  </h2>
                </div>

                <div className="flip-card-back">
                  <p className="p-3 text-danger">
                    You will find detailed family information in every profile.
                    Knowing the family will help you take the next step with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 col-lg-4 col-md-5 col-sm-9 col-12">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2 className="lato-light mt-3 text-danger">
                    Complete Family Information
                  </h2>
                </div>

                <div className="flip-card-back">
                  <p className="p-3 text-danger">
                    You will find detailed family information in every profile.
                    Knowing the family will help you take the next step with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 col-lg-4 col-md-6 col-sm-9 col-12">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2 className="lato-light mt-3 text-danger">
                    Complete Family Information
                  </h2>
                </div>

                <div className="flip-card-back">
                  <p className="p-3 text-danger">
                    You will find detailed family information in every profile.
                    Knowing the family will help you take the next step with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mycontainer mt-3 ourPlan">
        <div className="card text-center">
          <div className="card-header">
            <p className="lato-black">Our Plans</p>
          </div>

          <div className="card-body">
            <h5 className="card-title mb-5">Benefits of membership</h5>
            <div className="card-text text-center">
              <ul className="">
                <li>
                  Easy Accessibility - Easy and transparent access to all the
                  registered profiles
                </li>
                <li>
                  Saves Time And Money - Matrimonial sites are economical in
                  terms of time and money.
                </li>
                <li>
                  Results according to your preference - You can choose caste,
                  location and occupation.
                </li>
              </ul>

              <ul className="">
                <li>
                  Easy Accessibility - Easy and transparent access to all the
                  registered profiles
                </li>
                <li>
                  Saves Time And Money - Matrimonial sites are economical in
                  terms of time and money.
                </li>
                <li>
                  Results according to your preference - You can choose caste,
                  location and occupation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <Register text="Explore Our Plans" />
      </div>

      {/* <div className="comingsoon mycontainer text-center mt-5 mb-5">
        <h1>Coming Soon</h1>
      </div> */}
    </>
  );
}

export default Home;
