import { useState } from "react";

function MyProfile() {
  const [bio, setBio] = useState("");
  const [updateBio, setUpdateBio] = useState("");
  const [isEditBio, setIsEditBio] = useState(false);
  const [showDetails, setShowDetails] = useState({ id: null, show: false });

  const editingBio = () => {
    setIsEditBio(!isEditBio);
  };

  const addBio = (e) => {
    e.preventDefault();
    setUpdateBio(bio);
    setIsEditBio(false);
  };

  const changeHandleBio = (e) => {
    setBio(e.target.value);
  };

  const showProfileDetails = (id) => {
    setShowDetails({id: id, show: true });
  };

  return (
    <>
      <div className="mycontainer addbio d-md-flex mt-5">
        <div className="col-6">
          <img src="/image/salman.jpg" alt="" />
        </div>

        <div className="col-6">
          <div className="mt-5">
            <h1>Profile Summary</h1>
            <p>Name : Salmon Bhai</p>
            <p>Age : 51</p>
            <p>Phone : xxxxxxx98</p>
            <p>Gotra : Gupta</p>
            <p>City : Gwalior</p>
          </div>

          <h4 className="mt-5 mb-5">{updateBio}</h4>
          {isEditBio && (
            <div>
              <form onSubmit={addBio}>
                <textarea
                  name=""
                  value={bio}
                  onChange={changeHandleBio}
                  cols="100"
                  placeholder="Introduce Yourself. e.g. I am software developer in xyz company. I love to play , watch movies etc.."
                  rows="3"
                ></textarea>
                <button>Save</button>
              </form>
              <button onClick={() => setIsEditBio(false)}>Cancel</button>
            </div>
          )}

          <button onClick={editingBio}>
            {updateBio.length >= 1 ? "Edit Bio" : "Add Bio"}
          </button>

        </div>
      </div>

      <div className="mycontainer mt-5">
        <h1 className="mb-5">More Details</h1>

        <div className="d-flex gap-5">
          <div className="d-flex flex-column mt-5 gap-2">
            <button onClick={() => showProfileDetails(1)}>Basic Details</button>
            <button onClick={() => showProfileDetails(2)}>
              Personal Details
            </button>
            <button onClick={() => showProfileDetails(3)}>Family Details</button>
            <button onClick={() => showProfileDetails(4)}>Photos</button>
          </div>

          <div className="ms-5">
            {showDetails.show && showDetails.id === 1 && (
              <div className="basic">
                <h1>Basic Details</h1>
                <button>Edit</button>
              </div>
            )}

            {showDetails.show && showDetails.id === 2 && (
              <div className="personal">
                <h1>Personal Details</h1>
                <button>Edit</button>
              </div>
            )}

            {showDetails.show && showDetails.id === 3 && (
              <div className="Family">
                <h1>Family Details</h1>
                <button>Edit</button>
              </div>
            )}

            {showDetails.show && showDetails.id === 4 && (
              <div className="Gallary">
                <h1>Photos Details</h1>
                <button>Edit</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
