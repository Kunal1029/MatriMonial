/* eslint-disable no-unused-vars */
// import Register from "../Register";

import { Header2 } from "../Header";
import RecommendationDynamic from "../RecommendationDynamic";
// import RecommandationAll from "../RecommandationAll";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchPartner from "../Filter/SearchPartner";

function Home2() {
  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };
  return (
    <>
      
      <Header2 showAnimation2={true} /> 
     
      <div className="container-fluid oneD text-center home2">


        <div className="hone w-100">
          <p className="lato-bold">Best Platform for Vaishy samaja shaadi</p>
        </div>

        <div className="filter w-100 mt-2">
          <SearchPartner />
        </div>

      </div>


      {/* Recommandation */}

      <div className="mt-5 mb-5">
        {/* <Recommendation /> */}
        <RecommendationDynamic />

        <div className="recombtn">
          <Link
            to="/recommendationall"
            onClick={handleClick}
            id="myctn"
            className={`${isCtn ? "myctn" : "mybtn"}`}
          >
            See More
          </Link>
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
        {/* <Register text="Explore Our Plans" /> */}
      </div>
    </>
  );
}

export default Home2;
