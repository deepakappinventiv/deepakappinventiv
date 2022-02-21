// import logo from './logo.svg';
import './App.css';
import './assests/sass/style.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar'
import Activitycomponent from './Component/Activitycomponent'
import ActivityExperience from './Component/ActivityExperience';
import Location from './Component/Location';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="new-homepage">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/activitycomponent" element={<Activitycomponent />}></Route>
            <Route exact path="/activityexperience" element={<ActivityExperience />}></Route>
            <Route exact path="/location" element={<Location />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
