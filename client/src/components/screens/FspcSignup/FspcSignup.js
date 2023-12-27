import React from "react";
import "./style.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function FspcSignup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(username)
  };
  const handleChange1 = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };
  const handleChange2 = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };
  const handleChange3 = (e) => {
    setConfirmPass(e.target.value);
    console.log(confirmPass)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend({ username, email, password, confirmPass });
  };

  const sendDataToBackend = async (data) => {
    console.log(JSON.stringify(data));
    try {
      const response = await fetch('https://fspc.online/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('hi', JSON.stringify(response))
      if (response.ok) {
        // Data sent successfully
        // console.log('Registration Successful');
        toast.success("Register Successfully")
        navigate('/login')
      } else {
        // Handle errors
        const errorResponse = await response.json(); // Try to parse the response as JSON
        // console.log('Registration Failed', errorResponse.error);

        toast.error(errorResponse.error, {
          position: "top-right",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored"
        });
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error("An error occurred during registration");
    }
  };

  //login button routes to login
  const redirectToLogin = () => {
    navigate('/login');
  };


  return (
    <div className="FSPC-signup">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="frame">
            <div className="text-wrapper">Sign-up</div>
            <form onSubmit={handleSubmit}>
              <div className="div">
                <div className="text-wrapper-2">Username</div>
                <div className="div-wrapper">
                  <div className="text-wrapper-3">
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter your username"
                      style={{
                        color: 'black',
                        alignItems: 'center',
                        border: '1px solid',
                        borderColor: '#ded2d9',
                        borderRadius: '5px',
                        display: 'flex',
                        flex: '0 0 auto',
                        gap: '13px',
                        padding: '13px 10px',
                        position: 'relative',
                        width: '420px',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="div">
                    <div className="text-wrapper-2">Email</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">
                        <input
                          required
                          type="email"
                          onChange={handleChange1}
                          placeholder="Enter your email"
                          style={{
                            color: 'black',
                            alignItems: 'center',
                            border: '1px solid',
                            borderColor: '#ded2d9',
                            borderRadius: '5px',
                            display: 'flex',
                            flex: '0 0 auto',
                            gap: '13px',
                            padding: '13px 10px',
                            position: 'relative',
                            width: '420px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="div">
                      <div className="text-wrapper-2">Password</div>
                      <div className="frame-4">
                        <input
                          required
                          type="password"
                          onChange={handleChange2}
                          placeholder="Enter your password"
                          style={{
                            color: 'black',
                            alignItems: 'center',
                            border: '1px solid',
                            borderColor: '#ded2d9',
                            borderRadius: '5px',
                            display: 'flex',
                            flex: '0 0 auto',
                            gap: '13px',
                            padding: '13px 10px',
                            position: 'relative',
                            width: '420px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="div">
                      <div className="text-wrapper-2">Confirm Password</div>
                      <div className="frame-4">
                        <input
                          required
                          type="password"
                          onChange={handleChange3}
                          placeholder="Confirm your password"
                          style={{
                            color: 'black',
                            alignItems: 'center',
                            border: '1px solid',
                            borderColor: '#ded2d9',
                            borderRadius: '5px',
                            display: 'flex',
                            flex: '0 0 auto',
                            gap: '13px',
                            padding: '13px 10px',
                            position: 'relative',
                            width: '420px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-5">
                <button className="signup-button">Sign-up</button>
              </div>
            </form>
          </div>

          <div className="frame-6">
            <div className="text-wrapper-6">Already Have An Account?</div>
            <button className="login-button" onClick={redirectToLogin}>Login</button>
          </div>

          <div className="illustration">
            <div className="overlap-group">
              <div className="rectangle-2" />
              <img className="img" alt="Rectangle" src="/img/rectangle.png" />
              <img className="vector" alt="Vector" src="/img/vector-30.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-29.svg" />
              <img className="vector-3" alt="Vector" src="/img/vector-28.svg" />
              <img className="vector-4" alt="Vector" src="/img/vector-27.svg" />
              <img className="group" alt="Group" src="/img/group-3.png" />
              <img className="group-2" alt="Group" src="/img/group-4.png" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="vector-5" alt="Vector" src="/img/vector-26.svg" />
                  <img className="vector-6" alt="Vector" src="/img/vector-25.svg" />
                </div>
              </div>
              <div className="text-wrapper-8">FAST SPEED PROGRAMMING</div>
              <div className="text-wrapper-9">CLUB APP</div>
              <img className="vector-7" alt="Vector" src="/img/vector-24.svg" />
              <img className="vector-8" alt="Vector" src="/img/vector-23.svg" />
              <img className="vector-9" alt="Vector" src="/img/vector-22.svg" />
              <img className="vector-10" alt="Vector" src="/img/vector-21.svg" />
              <img className="vector-11" alt="Vector" src="/img/vector-20.svg" />
              <img className="vector-12" alt="Vector" src="/img/vector-19.svg" />
              <img className="group-3" alt="Group" src="/img/group.png" />
              <img className="vector-13" alt="Vector" src="/img/vector-18.svg" />
              <img className="vector-14" alt="Vector" src="/img/vector-17.svg" />
              <img className="vector-15" alt="Vector" src="/img/vector-15.svg" />
              <img className="vector-16" alt="Vector" src="/img/vector-15.svg" />
              <img className="vector-17" alt="Vector" src="/img/vector-14.svg" />
              <img className="vector-18" alt="Vector" src="/img/vector-13.svg" />
              <img className="vector-19" alt="Vector" src="/img/vector-12.svg" />
              <img className="vector-20" alt="Vector" src="/img/vector-11.svg" />
              <img className="vector-21" alt="Vector" src="/img/vector-9.svg" />
              <img className="vector-22" alt="Vector" src="/img/vector-9.svg" />
              <img className="vector-23" alt="Vector" src="/img/vector-8.svg" />
              <img className="vector-24" alt="Vector" src="/img/vector-7.svg" />
              <img className="vector-25" alt="Vector" src="/img/vector-6.svg" />
              <img className="vector-26" alt="Vector" src="/img/vector-5.svg" />
              <img className="vector-27" alt="Vector" src="/img/vector-4.svg" />
              <img className="vector-28" alt="Vector" src="/img/vector-3.svg" />
              <img className="vector-29" alt="Vector" src="/img/vector-1.svg" />
              <img className="vector-30" alt="Vector" src="/img/vector.svg" />
              <img className="group-4" alt="Group" src="/img/group-1.png" />
              <img className="group-5" alt="Group" src="/img/group-2.png" />
            </div>
            <img className="vector-31" alt="Vector" src="/img/vector-2.png" />
          </div>
          <div className="group-6">
            <img className="oval-copy" alt="Oval copy" src="/img/oval-copy-8.svg" />
            <div className="overlap-2">
              <img className="oval-copy-2" alt="Oval copy" src="/img/oval-copy-9.svg" />
              <div className="rectangle-3" />
            </div>
            <div className="overlap-3">
              <img className="oval-copy-2" alt="Oval copy" src="/img/oval-copy-10.svg" />
              <div className="rectangle-3" />
            </div>
            <img className="oval-copy-3" alt="Oval copy" src="/img/oval-copy-11.svg" />
            <div className="rectangle-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
