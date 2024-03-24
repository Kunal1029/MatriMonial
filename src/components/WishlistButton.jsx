// function WishlistButton1() {
//   return (
//     <div>
//       <i className="fa-regular fa-heart"></i>
//     </div>
//   )
// }

// function WishlistButton2() {
//     return (
//       <div>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//     )
//   }

// export {WishlistButton1 , WishlistButton2}

// import React from 'react'

{
  /* <div className="card-btn text-center mb-3">
              <Link
                to={/singleprofile?data=${card.Pro_id}}
                onClick={handleClick}
                id="myctn"
                className={${isCtn ? "myctn" : "mybtn"}}
              >
               data-bs-toggle="modal"
        data-bs-target="#deletemsg"
                Delete
              </Link>
            </div> */
  <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#deletemsg"
      >
        Delete
      </button>
}

function WishlistButton() {
  return (
    <div>
      

      <div
        className="modal fade "
        id="deletemsg"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="deletemsgLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

              <button className="modal-title btn btn-danger fs-5" id="deletemsgLabel">
                Warning ! You Lost All Data.
              </button>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>
            <div className="modal-body">Are You Sure ?</div>
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancle
              </button>


              <button type="button" className="btn btn-primary">
                Delete Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistButton;
