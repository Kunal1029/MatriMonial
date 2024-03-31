/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import MyProfile from "./components/FullRegister/MyProfile";
import MainRegister from "./components/FullRegister/MainRegister";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import { Header2 } from "./components/Header";
import Home from "./components/home/Home";
import Home2 from "./components/home/Home2";
import Pay from "./Pay";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";
import Pin from "./components/pin/Pin.jsx";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import RecommendationDynamic from "./components/RecommendationDynamic.jsx";
import RecommandationAll from "./components/RecommandationAll.jsx";
import IndividualProfile from "./components/Indivisual Profile/IndividualProfile.jsx";
import OurPlans from "./components/OurPlans.jsx";
import Admin from "./components/Admin/Admin.jsx";
import { AdminLogin } from "./components/Admin/AdminLogin.jsx";
import SearchPartner from "./components/Filter/SearchPartner.jsx";
import PerfectMatch from "./components/Filter/PerfectMatch.jsx";
import Contact2 from "./components/Contact2.jsx";
import About2 from "./components/About2.jsx";
import Moredetails from "./components/Admin/Moredetails.jsx";
import Alluserprofile from "./components/AlluserProfile.jsx";
import Saveprofile from "./components/Saveprofile.jsx";

// import Saveprofile from "./components/Saveprofile.jsx";

function App() {
  return (
    <div>
      {/* <Header2 /> */}
      {/* <Home /> */}
      {/* <Home2 /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <MainRegister /> */}
      {/* <Pin /> */}
      {/* <MyProfile /> */}
      {/* <Pay /> */}
      {/* <Footer />  */}
      {/* <RegisterForm /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/mainregister" element={<MainRegister />} />
        <Route
          path="/recommendationdynamic"
          element={<RecommendationDynamic />}
        />
        <Route path="/recommendationall" element={<RecommandationAll />} />
        <Route path="/singleprofile" element={<IndividualProfile />} />
        <Route path="/ourplan" element={<OurPlans />} />
        <Route path="/alluserprofile" element={<Alluserprofile />} />
        <Route path="/saveprofile" element={<Saveprofile />} />
        <Route path="/adminDashboard" element={<Admin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/searchpartner" element={<SearchPartner />} />
        <Route path="/acontact" element={<Contact2 />} />
        <Route path="/profilecheck" element={<Moredetails />} />
        {/* <Route path="/profilecheck2" element={<Moredetails2/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
