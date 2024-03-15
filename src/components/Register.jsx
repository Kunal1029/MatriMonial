/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";

export default function Register({ text }) {

  // Form Modal 1
  const [isModel1 , setIsmodel1] = useState(false);
  const [ModelOneData , setModelOneData] = useState("");

  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  const Model1 = () =>{
    setIsmodel1(true);
  }

  useEffect(()=>{
    console.log(ModelOneData);
  },[ModelOneData , setModelOneData])
   // Form Modal 1 end 

  return (
    <>
      {/* // <!-- Button trigger modal --> */}
      <div
        className="modal fade"
        id="ModalToggle"
        aria-hidden="true"
        aria-labelledby="ModalToggleLabel"
      >
        <div className="modal-dialog modal-fullscreen-md-down modal-dialog-centered">
         
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-3" id="ModalToggleLabel">
                For Who ?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form action="" className="d-flex form-m-1">
                
                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="myself"
                    autoComplete="off"
                    value="myself"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label onClick={Model1} className="btn btn-outline-danger" htmlFor="myself">
                    Myself
                  </label>
                </div>

                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="son"
                    autoComplete="off"
                    value="son"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label  onClick={Model1} className="btn btn-outline-danger" htmlFor="son">
                    Son
                  </label>
                </div>

                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="daughter"
                    autoComplete="off"
                    value="daughter"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label onClick={Model1} className="btn btn-outline-danger" htmlFor="daughter">
                    Daughter
                  </label>
                </div>

                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="brother"
                    autoComplete="off"
                    value="brother"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label onClick={Model1} className="btn btn-outline-danger" htmlFor="brother">
                    Brother
                  </label>
                </div>

                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="sister"
                    autoComplete="off"
                    value="sister"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label onClick={Model1} className="btn btn-outline-danger" htmlFor="sister">
                    Sister
                  </label>
                </div>

                <div className="ms-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="relative"
                    autoComplete="off"
                    value="relative"
                    onChange={(e)=>setModelOneData(e.target.value)}
                  />
                  <label onClick={Model1} className="btn btn-outline-danger" htmlFor="relative">
                    Relative
                  </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                hidden={!isModel1}
                className="btn-form-m-1 px-3 py-1"
                data-bs-target="#ModalToggle2"
                data-bs-toggle="modal"
              >
                Next
              </button>

            </div>

          </div>

        </div>
      </div>

      <div
        className="modal fade"
        id="ModalToggle2"
        aria-hidden="true"
        aria-labelledby="ModalToggleLabel2"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ModalToggleLabel2">
                Register for better experience
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <RegisterForm />
            </div>

            <div className="modal-footer btn-form-m-2">
              <button
                className=" px-4 py-2"
                data-bs-target="#ModalToggle"
                data-bs-toggle="modal"
              >
                Prev
              </button>
            </div>

          </div>
        </div>
      </div>

      <a
        onClick={handleClick}
        id="myctn"
        className={`${isCtn ? "myctn" : "mybtn"}`}
        data-bs-target="#ModalToggle"
        data-bs-toggle="modal"
      >
        {text}
      </a>
    </>
  );
}
