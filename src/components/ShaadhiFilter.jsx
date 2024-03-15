import "../assets/script/script";
import MyButton from "./MyButton";
// import Register from "./Register";


export default function ShaadhiFilter() {
  return (
    <form className="filterOne">
      
      <div className="fom1">

        {/* Gender */}

        <div className="d-flex flex-column">
          <label className="form-label text-white">
            I&rsquo;m looking for a
          </label>
          <select className="form-select">
            <option>Woman</option>
            <option>man</option>
          </select>
        </div>

        {/* age */}

        <div className="d-flex flex-column">
          <label className="form-label text-white">aged</label>
          <div className="d-flex">
            <select className="form-select">
              {Array.from({ length: 53 }, (_, index) => (
                <option key={index + 21}>{index + 21}</option>
              ))}
            </select>
            <span className="text-white ms-2 me-2">to</span>
            <select className="form-select">
              {Array.from({ length: 53 }, (_, index) => (
                <option key={index + 21}>{index + 21}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      <div className="fom1">

        {/* religion */}
        <div className="d-flex flex-column">
          <label className="form-label text-white">of religion</label>
          <select className="form-select">
            <option>Select</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Sikh</option>
            <option>Parsi</option>
            <option>Jain</option>
          </select>
        </div>

        {/* language */}
        <div className="d-flex flex-column">
          <label className="form-label text-white">and mother tongue</label>
          <select className="form-select">
            <option>Select</option>
            <option>Hindi</option>
            <option>Englis</option>
          </select>
        </div>

      </div>
      
      {/* <button type="submit" className="btn btn-primary px-5" >
        Let&rsquo;s Begin
      </button> */}
      
      <div >
        <MyButton text="Let's Begin" />
      </div>

  
    </form>
  );
}
