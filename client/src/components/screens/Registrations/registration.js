import React from "react";
import "./style.css";
import {Header} from '../../Header'

export default function RegistrationPage() {
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
          <div className="standing">
            <div className="club">
              <div className="text-wrapper-3">1</div>
              <img className="logo" alt="Chelsea Logo" src="/imgHome/rectangle-32-5.png" />
              <div className="text-wrapper-4">Chelsea F.C</div>
            </div>
            <div className="poin">
              <div className="text-wrapper-2">14</div>
              <div className="text-wrapper-2">1</div>
            </div>
          </div>
          <div className="standing">
            <div className="club">
              <div className="text-wrapper-3">2</div>
              <div className="logo">
                <img className="image" alt="Chelsea Logo" src="/imgHome/rectangle-32-5.png" />
              </div>
              <div className="text-wrapper-4">Manchester City</div>
            </div>
            <div className="poin-2">
              <div className="text-wrapper-2">13</div>
              <div className="text-wrapper-2">2</div>
            </div>
          </div>
          <div className="standing">
            <div className="club">
              <div className="text-wrapper-3">3</div>
              <div className="logo">
                <img className="image" alt="Liverpool Logo" src="/imgHome/rectangle-32-5.png" />
              </div>
              <div className="text-wrapper-4">Liverpool</div>
            </div>
            <div className="poin-2">
              <div className="text-wrapper-2">13</div>
              <div className="text-wrapper-2">3</div>
            </div>
          </div>
          <div className="standing">
            <div className="club">
              <div className="text-wrapper-3">4</div>
              <div className="logo">
                <img className="image" alt="Liverpool Logo" src="/imgHome/rectangle-32-5.png" />
              </div>
              <div className="text-wrapper-4">Manchester United</div>
            </div>
            <div className="poin-2">
              <div className="text-wrapper-2">12</div>
              <div className="text-wrapper-2">3</div>
            </div>
          </div>
          <div className="standing">
            <div className="club">
              <div className="text-wrapper-3">5</div>
              <div className="logo">
                <img className="imgae" alt="West Ham Logo" src="/imgHome/rectangle-32-5.png" />
              </div>
              <div className="text-wrapper-4">West Ham United</div>
            </div>
            <div className="poin-2">
              <div className="text-wrapper-2">11</div>
              <div className="text-wrapper-2">4</div>
            </div>
          </div>
          <div className="standing-2">
            <div className="club">
              <div className="text-wrapper-3">6</div>
              <div className="logo">
                <img className="img" alt="Arsenal Logo" src="/imgHome/rectangle-32-5.png" />
              </div>
              <div className="text-wrapper-4">Arsenal FC</div>
            </div>
            <div className="poin-2">
              <div className="text-wrapper-2">11</div>
              <div className="text-wrapper-2">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
