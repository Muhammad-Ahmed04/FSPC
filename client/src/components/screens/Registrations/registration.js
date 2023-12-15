// RegistrationPage.jsx

import React from "react";
import { Header } from "../../Header";
import "./style.css";

const RegistrationPage = () => {
  return (
    <>
      <Header page="home" />
      <div className="main">
        {/* Center Section */}
        <div className="center">
          <div className="registration-content">
            {/* Your custom registration content goes here */}
            <h1>Registrations</h1>
            <p>Upcoming events:</p>
            <ul>
              <li>SOFTEC</li>
              <li>IEEExtreme</li>
              <li>PROCOM’24</li>
              <li>Asia West</li>
              <li>ICPC</li>
              <li>Coder’s Cup</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
