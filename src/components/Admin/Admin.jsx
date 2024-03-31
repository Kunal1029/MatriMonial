/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import DataAdmin from "./DataAdmin";
import AdminHeader from "./AdminHeader";
import { getAdminDetails } from "../userUtils";
import axios from "axios";

function Admin() {
  // const adminDetails = getAdminDetails();
  // console.log(adminDetails);
  const [showType, setshowType] = useState({ show: true, num: null });

  const [dataArray, setdataArray] = useState([
    { id: null, name: "", email: "", status: "" },
  ]);

  const [userdataArray, setuserdataArray] = useState([]);
  const [profileappdataArray, setprofileappdataArray] = useState([]);
  const [profilenotappdataArray, setprofilenotappdataArray] = useState([]);
  const [getintouchArray, setgetintouchArray] = useState([]);

  const [errors, setErrors] = useState("");

  // useEffect(() => {
  //   const data = DataAdmin.DataAdmin;
  //   // Map over the data and transform each item into the desired format
  //   const newDataArray = data.map((prev) => ({
  //     id: prev.id,
  //     name: prev.name,
  //     email: prev.email,
  //     status: prev.status,
  //   }));
  //   // Update the dataArray state with the new array
  //   setdataArray(newDataArray);
  //   const fetchuserData = () => {
  //     axios
  //       .get(" http://localhost:3010/users/showallusers")
  //       .then((response) => {
  //         if (response.data.success) {
  //           setuserdataArray(response.data.data);
  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   };
  //   fetchuserData();

  //   const fetchgetintouchData = () => {
  //     axios
  //       .get(" http://localhost:3010/users/showgetintouch")
  //       .then((response) => {
  //         if (response.data.success) {
  //           setgetintouchArray(response.data.data);
  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   };
  //   fetchgetintouchData();

  //   const fetchprofileappData = () => {
  //     axios
  //       .get(" http://localhost:3010/users/getallrecomdprofile")
  //       .then((response) => {
  //         if (response.data.success) {
  //           setprofileappdataArray(response.data.data);
  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   };
  //   fetchprofileappData();
  //   const fetchprofilenotappData = () => {
  //     axios
  //       .get(" http://localhost:3010/users/getallnotapprovedprofile")
  //       .then((response) => {
  //         if (response.data.success) {
  //           setprofilenotappdataArray(response.data.data);
  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   };
  //   fetchprofilenotappData();
  // }, []);

  function showDataType(e) {
    setshowType({ show: true, num: e });
  }

  // function deleteuser(e) {
  //   axios
  //     .post(` http://localhost:3010/users/deleteuserbyadmin/${e}`)
  //     .then((response) => {
  //       if (response.data.success) {
  //         window.location.href = `/adminDashboard`;
  //       } else {
  //         setErrors("Invalid email or password."); // Display error message
  //       }
  //     })
  //     .catch(() => {
  //       setErrors("An error occurred. Please try again."); // Display error message
  //     });
  // }

  // function approveprodetails(e) {
  //   axios
  //     .post(` http://localhost:3010/users/approvedprobyadmin/${e}`)
  //     .then((response) => {
  //       if (response.data.success) {
  //         window.location.href = `/adminDashboard`;
  //       } else {
  //         setErrors("Invalid email or password."); // Display error message
  //       }
  //     })
  //     .catch(() => {
  //       setErrors("An error occurred. Please try again."); // Display error message
  //     });
  // }

  // function checkprodetails(e) {
  //   window.location.href = `/profilecheck?data=${e}`;
  // }
  // function checkprodetails2(e) {
  //   window.location.href = `/profilecheck2?data=${e}`;
  // }
  // function deleteprodetails(e) {
  //   axios
  //     .post(` http://localhost:3010/users/deleteprobyadmin/${e}`)
  //     .then((response) => {
  //       if (response.data.success) {
  //         window.location.href = `/adminDashboard`;
  //       } else {
  //         setErrors("Invalid email or password."); // Display error message
  //       }
  //     })
  //     .catch(() => {
  //       setErrors("An error occurred. Please try again."); // Display error message
  //     });
  // }

  return (
    <div className="admin mb-5">
      <AdminHeader />

      {errors}
      {/* all profile */}
      <div className="showAlldata mycontainer mb-5">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-pills gap-4 card-header-pills">
              <li className="nav-item">
                <a
                  onClick={() => showDataType(null)}
                  className={`nav-link ${
                    showType.show && showType.num === null ? "active" : ""
                  }  `}
                  href="#"
                >
                  Show All Users
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => showDataType(1)}
                  className={`nav-link ${
                    showType.show && showType.num === 1 ? "active" : ""
                  }  `}
                  href="#"
                >
                  Show Approved Profile
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => showDataType(2)}
                  className={`nav-link ${
                    showType.show && showType.num === 2 ? "active" : ""
                  }  `}
                  href="#"
                >
                  Pending Profile
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => showDataType(4)}
                  className={`nav-link ${
                    showType.show && showType.num === 4 ? "active" : ""
                  }  `}
                  href="#"
                >
                  Inquiry Visiters
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {/* btn null */}
            {showType.num === null && (
              <div className="mt-4 mb-5">
                <table className="table table-success  ">
                  {/* <!-- On rows --> */}
                  <thead>
                    <tr className="table-primary">
                      <th>user_id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {userdataArray.map((prev, i) => (
                      <tr key={i}>
                        <td className="table-primary">{prev.user_id}</td>
                        <td className="table-secondary">{prev.Name}</td>
                        <td className="table-success">{prev.Email}</td>
                        <td className="table-danger">{prev.status}</td>
                        <td className="table-success">
                          <button onClick={() => deleteuser(prev.user_id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* btn 1 */}
            {showType.num === 1 && (
              <div className="mt-4 mb-5">
                <table className="table table-success  ">
                  {/* <!-- On rows --> */}
                  <thead>
                    <tr className="table-primary">
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {profileappdataArray.map((prev, i) => (
                      <tr key={i}>
                        <td className="table-primary">{prev.Pro_id}</td>
                        <td className="table-secondary">{prev.Name}</td>
                        <td className="table-success">{prev.Email}</td>
                        <td className="table-success">{prev.DOB}</td>
                        <td className="table-danger">{prev.Phone_Number}</td>
                        <td className="table-success">
                          <button onClick={() => checkprodetails2(prev.Pro_id)}>
                            More Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* btn 2 */}
            {showType.num === 2 && (
              <div className="mt-4 mb-5">
                <table className="table table-success  ">
                  {/* <!-- On rows --> */}
                  <thead>
                    <tr className="table-primary">
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>Check Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {profilenotappdataArray.map((prev, i) => (
                      <tr key={i}>
                        <td className="table-primary">{prev.Pro_id}</td>
                        <td className="table-secondary">{prev.Name}</td>
                        <td className="table-success">{prev.Email}</td>
                        <td className="table-success">{prev.DOB}</td>
                        <td className="table-danger">{prev.Phone_Number}</td>
                        <td className="table-success">
                          <button onClick={() => checkprodetails(prev.Pro_id)}>
                            More Details
                          </button>
                        </td>
                        <td className="table-success">
                          <button
                            onClick={() => approveprodetails(prev.Pro_id)}
                          >
                            Approved
                          </button>
                          <br></br>
                          <br></br>
                          <button onClick={() => deleteprodetails(prev.Pro_id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* btn 3 */}

            {/* btn 4 */}
            {showType.num === 4 && (
              <div className="mt-4 mb-5">
                <table className="table table-success  ">
                  {/* <!-- On rows --> */}
                  <thead>
                    <tr className="table-primary">
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>phone</th>
                      <th>Message</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {getintouchArray.map((prev, i) => (
                      <tr key={i}>
                        <td className="table-primary">{prev.id}</td>
                        <td className="table-secondary">{prev.name}</td>
                        <td className="table-success">{prev.email}</td>
                        <td className="table-danger">{prev.phone}</td>
                        <td className="table-danger">{prev.msg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

           
          </div>
        </div>
      </div>
      {/* all profile end */}
    </div>
  );
}

export default Admin;
