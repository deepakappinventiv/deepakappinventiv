import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="App">
      <ul className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activitycomponent">Activity Component</Link>
        </li>
        <li>
          <Link to="/activityexperience">Activity Experience</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/newlocation">New Location</Link>
        </li>
        <li>
          <Link to="/newactivity">New Activity</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar;