import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../style/AuthenticationPageStyle";
import { loginUser, registerUser } from "../store/slices/userSlice";
import { showAlert, hideAlert } from "../store/slices/alertSlice";
import Alert from "../components/Alert";

function AuthenticationPage() {
  // Component State
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  //   Redux
  const dispatch = useDispatch();
  const { data, errMsg } = useSelector((state) => state.user);

  // Navigation
  const navigate = useNavigate();

  // Side Effect -> Redirect to homepage when user logs in
  useEffect(() => {
    if (data) {
      dispatch(
        showAlert({ text: "Authentication Successful", type: "success" })
      );
      const timer = setTimeout(() => {
        dispatch(hideAlert());
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, dispatch, navigate]);

  // Side Effect -> Show error alert
  useEffect(() => {
    if (errMsg) {
      dispatch(showAlert({ text: errMsg, type: "error" }));
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errMsg, dispatch]);

  //   Form Submit Handler
  function formSubmitHandler(e) {
    e.preventDefault();
    if (showLoginForm) {
      return dispatch(loginUser(details));
    }
    dispatch(registerUser(details));
  }

  return (
    <Wrapper>
      <div className="body">
        <Alert />
        <div className="title">
          {showLoginForm ? <h1>Login</h1> : <h1>Register</h1>}
        </div>
        <form onSubmit={formSubmitHandler}>
          {!showLoginForm && (
            <div className="form-content">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
            </div>
          )}

          <div className="form-content">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
            />
          </div>
          <div className="form-content">
            <button type="submit">Submit</button>
          </div>
          <div className="form-content">
            {showLoginForm ? (
              <p>
                New Here?{" "}
                <span onClick={() => setShowLoginForm(false)}>Register</span>
              </p>
            ) : (
              <p>
                Already Member?{" "}
                <span onClick={() => setShowLoginForm(true)}>Login</span>{" "}
              </p>
            )}
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default AuthenticationPage;
