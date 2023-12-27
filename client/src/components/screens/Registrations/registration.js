import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import "./style.css";

export default function RegistrationPage() {
  const [registerations, setRegisterations] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isLoadingRegisterations, setIsLoadingRegisterations] = useState(true);
  const [isLoadingCompetitions, setIsLoadingCompetitions] = useState(true);
  const [user, setUser] = useState()
  useEffect(() => {
    // Fetch registerations
    const fetchOnsiteCompetition = async () => {
      try {
        const response = await fetch("https://fspc.online/api/get-onsite-competitions"); // Update URL to your registerations API
        const result = await response.json();
        console.log("Fetched registerations:", result); // Add this log
        setRegisterations(result);
        console.log(result)
        setIsLoadingRegisterations(false);
      } catch (error) {
        console.error("Error fetching registerations:", error);
        setIsLoadingRegisterations(false);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await fetch("https://fspc.online/api/me", {
          method: 'GET',
          credentials: 'include'
        });
        const result = await response.json();
        setUser(result);

      } catch (error) {
        console.error('Error Fetching User data', error)
      }
    }

    fetchOnsiteCompetition();
    // fetchCompetitions();
    fetchUser();
  }, []);

  return (
    <>
      <Header page="rh"></Header>
      <div className="register">
        <div className="text-wrapper">🏆 On-site Competitions</div>
        <div className="table">
          <div className="ranking">
            <div className="frame">
              <div className="div">Register Now!</div>
              <div className="frame-2">
                <div className="text-wrapper-2">Registrations Completed</div>
                <div className="text-wrapper-2">Registrations Left</div>
              </div>
            </div>
            {registerations.map((item) => (
              <div className="standing">
                <div className="club">
                  <div className="text-wrapper-3">*</div>
                  <img className="logo" alt="Chelsea Logo" src="/imgHome/rectangle-32-5.png" />
                  <div className="text-wrapper-4" style={{ color: (item.max_registerations - item.registerations_completed) < 10 ? "red" : "white" }}>{item.title}</div>
                  <div style={{ color: "red" }}>Register Now</div>
                </div>
                <div className="poin">
                  <div className="text-wrapper-2" style={{ color: (item.max_registerations - item.registerations_completed) < 10 ? "red" : "white" }}>{item.registerations_completed}</div>
                  <div className="text-wrapper-2" style={{ color: (item.max_registerations - item.registerations_completed) < 10 ? "red" : "white" }}>{item.max_registerations - item.registerations_completed}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
