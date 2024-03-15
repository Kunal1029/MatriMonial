export function RegisterForm() {
  return (
    <div className="mycontainer firstmodalform">
      <div className="formImg col-md-6">
        <img src="image/finalLogo.png" alt="" />
      </div>

      <form className="firstRegister col-md-5">
        <div className="mb-3 col-lg-12">
          <label className="form-label">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control shadow-none"
          />
        </div>

        <div className="mb-3 col-lg-12">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="form-control  shadow-none "
          />
        </div>

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

        <div className="mb-3 col-lg-12">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control  shadow-none "
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
