import { Header } from "./Header";

function Contact() {
  return (
    <>
      <div className="container-fluid maincontact text-center">
        
        <Header showAnimation={true} />

        {/* <!-- <div><img src="image/contact1.jpg" alt=""></div> --> */}

        <div className="container contact">
          <div className="col-lg-6 col-md-5 col-12 text-white">
            <h1>Get in Touch</h1>
            <p>Address1</p>
            <p>Address2</p>
            <p>contact number</p>
            <p>email</p>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <form className="">
              <div className="form-group mb-3">
                <label>First Name </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group mb-3">
                <label>Phone</label>
                <input
                  type="Number"
                  className="form-control mt-1"
                  placeholder="Enter Phone number"
                />
              </div>

              <div className="form-group mb-3">
                <label>Any Comment or Query?</label>
                <textarea cols="40" rows="3" placeholder="Write Here">
                  Comment
                </textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* <!-- map --> */}
      </div>

      <div className="mappmt-2 mb-2 text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14316.720846588045!2d78.1678433!3d26.2233334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709121811564!5m2!1sen!2sin"
          
          style={{border: "0px", width:"90%", height:"450px"}}
          className="mt-3 mb-2"
        ></iframe>
      </div> 
    </>
  );
}

export default Contact;
