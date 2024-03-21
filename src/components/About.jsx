import { Header } from "./Header"

function About() {
  return (
    
    <div className="mainAbout">
       <Header />
      <div className="aboutus">
        <h1>About Us</h1>
      </div>

      <div className="aboutimg text-center">
        <img src="image/pic.jpg" alt="" />
      </div>

      <div className="aboutText w-100">
        <h2>About Vasya Samaj Matrimonial</h2>
        <p className="">
          Welcome to Vasya Samaj Matrimonial, your trusted partner in finding
          the perfect match within the Vasya community. We understand the
          importance of cultural values and traditions in finding a life
          partner, and our platform is designed to help individuals connect with
          like-minded individuals who share similar backgrounds, beliefs, and
          aspirations.
        </p>
      </div>

      <div className="aboutCard w-100 mt-5 mb-5">
        <div className="card  text-center">
          <div className="card-header  w-100">
            <ul className="nav nav-tabs card-header-tabs text-center">
              <li className="nav-item">
                <a className="nav-link" id="mission">
                  Our Mission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="team">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <div className="mb-4 permanentCard">
              <i>
                <b>Community-Focused</b> We are all about the Vasya community.
                Our platform is made just for Vasya individuals, keeping their
                values and traditions in mind every step of the way.
              </i>
              <br />
              <i>
                <b>Advanced Matching</b> Our goal is to streamline the
                matchmaking process and increase the likelihood of finding
                meaningful connections.
              </i>
              <br />
              <i>
                <b>User-Friendly Interface</b> We believe in simplicity and ease
                of use.
              </i>
            </div>

            <div className="om" id="Ourmission">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                At Vasya Samaj Matrimonial, our mission is to facilitate
                meaningful connections and lifelong relationships within the
                Vasya community. We strive to provide a safe and secure platform
                where individuals can search for their ideal partner with
                confidence and convenience. Our dedicated team is committed to
                ensuring the privacy and security of our users while offering
                personalized support throughout their matrimonial journey.
              </p>
            </div>

            <div className="ot" id="Ourteam">
              <h5 className="card-title">Our Team</h5>
              <p className="card-text">
                Behind Vasya Samaj Matrimonial is a dedicated team of
                professionals committed to delivering exceptional service and
                support to our members. From customer service representatives to
                technical experts, each member of our team plays a crucial role
                in ensuring the success and satisfaction of our users.
              </p>
            </div>

            <a href="#" className="btn btn-outline-danger mt-3">
              Explore More
            </a>
            
          </div>
        </div>
      </div>

      {/* <!-- <div className="started">
      <h1>Get Started Today</h1>
      <p>Whether you're seeking a life partner or looking to explore potential matches within the Vasya community, Vasya Samaj Matrimonial is here to help. Join our platform today and take the first step towards finding your perfect match!</p>
     </div> --> */}
    </div>
  )
}

export default About
