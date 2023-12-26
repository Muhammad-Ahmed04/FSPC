import React from "react";
// import { Check } from "../../check/index.js";
import { useState, useEffect } from "react";
// import { Cookies } from "universal-cookie"
import GlitchButton from "../../GlitchButton";
// import { IconsNavigationOthers10Check1 } from "../../../assets/icons/IconsNavigationOthers10Check1";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


import "./style.css";


export default function FspcLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  // const cookie = new Cookies();
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (response.ok) {
          const { sessionUser } = await response.json()
          if (sessionUser)
            navigate('/home');
        }
      }
      catch (error) {
        console.error('Error Fetching User data', error);
      }
    };

    fetchUserInfo();
  }, []);



  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(username)
  };
  const handleChange1 = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend({ username, password });
  };

  const sendDataToBackend = async (data) => {
    console.log(JSON.stringify(data));
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse the response JSON
        const { username, role, access, userInfo } = responseData;
        localStorage.setItem('access', access);

        console.log(`Logged in as ${username} with role ${role}`);
        console.log(JSON.stringify(userInfo))

        // Now you can use username and role as needed
        // For example, you can set cookies or store them in your application state

        // cookies.set('AUTHORISATION',  { path: '/' });
        console.log('Login Successful');
        toast.success("login Successfully")
        navigate('/home');
      } else {
        // Handle errors
        toast.error("Incorrect credentials", {
          position: "top-right",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored"
        })
        console.error('Invalid Credentials');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  //create an account button routes to register page
  const redirectToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="FSPC-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="frame">
            <div className="text-wrapper">Not Registered Yet?</div>
            <button className="Create-an-account-button" onClick={redirectToRegister}>Create an account</button>
          </div>
          <div className="illustration">
            <div className="overlap-group">
              <div className="rectangle-2" />
              <img className="img" alt="Rectangle" src="/rectangle-1.png" />
              <img className="vector" alt="Vector" src="/vector-30.svg" />
              <img className="vector-2" alt="Vector" src="/vector-29.svg" />
              <img className="vector-3" alt="Vector" src="/vector-28.svg" />
              <img className="vector-4" alt="Vector" src="/vector-27.svg" />
              <img className="group" alt="Group" src="/group-3.png" />
              <img className="group-2" alt="Group" src="/group-4.png" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="vector-5" alt="Vector" src="/vector-26.svg" />
                  <img className="vector-6" alt="Vector" src="/vector-25.svg" />
                </div>
              </div>
              <div className="text-wrapper-2">FAST SPEED PROGRAMMING</div>
              <div className="text-wrapper-3">CLUB APP</div>
              <img className="vector-7" alt="Vector" src="/vector-24.svg" />
              <img className="vector-8" alt="Vector" src="/vector-23.svg" />
              <img className="vector-9" alt="Vector" src="/vector-22.svg" />
              <img className="vector-10" alt="Vector" src="/vector-21.svg" />
              <img className="vector-11" alt="Vector" src="/vector-20.svg" />
              <img className="vector-12" alt="Vector" src="/vector-19.svg" />
              <img className="group-3" alt="Group" src="/group.png" />
              <img className="vector-13" alt="Vector" src="/vector-18.svg" />
              <img className="vector-14" alt="Vector" src="/vector-17.svg" />
              <img className="vector-15" alt="Vector" src="/vector-15.svg" />
              <img className="vector-16" alt="Vector" src="/vector-15.svg" />
              <img className="vector-17" alt="Vector" src="/vector-14.svg" />
              <img className="vector-18" alt="Vector" src="/vector-13.svg" />
              <img className="vector-19" alt="Vector" src="/vector-12.svg" />
              <img className="vector-20" alt="Vector" src="/vector-11.svg" />
              <img className="vector-21" alt="Vector" src="/vector-9.svg" />
              <img className="vector-22" alt="Vector" src="/vector-9.svg" />
              <img className="vector-23" alt="Vector" src="/vector-8.svg" />
              <img className="vector-24" alt="Vector" src="/vector-7.svg" />
              <img className="vector-25" alt="Vector" src="/vector-6.svg" />
              <img className="vector-26" alt="Vector" src="/vector-5.svg" />
              <img className="vector-27" alt="Vector" src="/vector-4.svg" />
              <img className="vector-28" alt="Vector" src="/vector-3.svg" />
              <img className="vector-29" alt="Vector" src="/vector-1.svg" />
              <img className="vector-30" alt="Vector" src="/vector.svg" />
              <img className="group-4" alt="Group" src="/group-1.png" />
              <img className="group-5" alt="Group" src="/group-2.png" />
            </div>
            <img className="vector-31" alt="Vector" src="/vector-2.png" />
          </div>
          <div className="group-6">
            <img className="oval-copy" alt="Oval copy" src="/oval-copy-8.svg" />
            <div className="overlap-2">
              <img className="oval-copy-2" alt="Oval copy" src="/oval-copy-9.svg" />
              <div className="rectangle-3" />
            </div>
            <div className="overlap-3">
              <img className="oval-copy-2" alt="Oval copy" src="/oval-copy-10.svg" />
              <div className="rectangle-3" />
            </div>
            <img className="oval-copy-3" alt="Oval copy" src="/oval-copy-11.svg" />
            <div className="rectangle-4" />
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Login to your Account</div>
              </div>
            </div>
            <p className="or-sign-in-with">
              <span className="span">-------------</span>
              <span className="text-wrapper-5"> or Sign in with username </span>
              <span className="span">------------- </span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="text-wrapper-6">username</div>
                    <div className="frame-6">
                      <input type="text"
                        required
                        value={username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        className="text-wrapper-7"></input>
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="frame-5">
                      <div className="text-wrapper-6">Password</div>
                      <div className="frame-8">
                        <input type="password"
                          required
                          value={password}
                          onChange={handleChange1}
                          placeholder="********"
                          className="text-wrapper-7"></input>
                      </div>
                    </div>
                    <div className="frame-9">
                      <label className="checkbox">
                        <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                        <span className="checkmark"></span>
                        <div className="text-wrapper-9">Remember Me</div>
                      </label>
                      <div className="text-wrapper-10">Forgot Password?</div>
                    </div>
                  </div>
                </div>
                <div className="frame-10">
                  <button type="submit" className="text-wrapper-11"><GlitchButton text="Login" /></button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
