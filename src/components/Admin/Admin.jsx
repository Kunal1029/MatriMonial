/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import DataAdmin from "./DataAdmin";
import AdminHeader from "./AdminHeader";

function Admin() {
  
  const [showType, setshowType] = useState({ show: true, num: null });

  const [dataArray, setdataArray] = useState([
    { id: null, name: "", email: "", status: "" },
  ]);

 

  useEffect(() => {
    const data = DataAdmin.DataAdmin;
    // Map over the data and transform each item into the desired format
    const newDataArray = data.map((prev) => ({
      id: prev.id,
      name: prev.name,
      email: prev.email,
      status: prev.status,
    }));
    // Update the dataArray state with the new array
    setdataArray(newDataArray);
  }, []);

  function showDataType(e) {
    setshowType({ show: true, num: e });
  }

  return (
    <div className="admin mb-5">
     
     <AdminHeader />

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
                  Pending Verifications
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
                  Rejected
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={() => showDataType(3)}
                  className={`nav-link ${
                    showType.show && showType.num === 3 ? "active" : ""
                  }  `}
                  href="#"
                >
                  Approved
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
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {dataArray.map((prev, i) => (
                      <tr key={i}>
                        <td className="table-primary">{prev.id}</td>
                        <td className="table-secondary">{prev.name}</td>
                        <td className="table-success">{prev.email}</td>
                        <td className="table-danger">{prev.status}</td>
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
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {dataArray
                      .filter((prev) => prev.status === "pending")
                      .map((prev, i) => (
                        <tr key={i}>
                          <td className="table-primary">{prev.id}</td>
                          <td className="table-secondary">{prev.name}</td>
                          <td className="table-success">{prev.email}</td>
                          <td className="table-danger">{prev.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* btn 2 */}
            {showType.num === 2 && <h1>Data coming</h1>}

            {/* btn 3 */}
            {showType.num === 3 && (
              <div className="mt-4 mb-5">
                <table className="table table-success  ">
                  {/* <!-- On rows --> */}
                  <thead>
                    <tr className="table-primary">
                      <th>id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody className="table-group-divider">
                    {dataArray
                      .filter((prev) => prev.status === "approved")
                      .map((prev, i) => (
                        <tr key={i}>
                          <td className="table-primary">{prev.id}</td>
                          <td className="table-secondary">{prev.name}</td>
                          <td className="table-success">{prev.email}</td>
                          <td className="table-danger">{prev.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* btn 4 */}
            {showType.num === 4 && <h1>Inquiry Data coming</h1>}

            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      {/* all profile end */}
    </div>
  );
}

export default Admin;
