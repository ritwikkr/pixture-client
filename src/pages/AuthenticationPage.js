import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../style/AuthenticationPageStyle";
import { loginUser, registerUser } from "../store/slices/userSlice";

function AuthenticationPage() {
  // Component State
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  //   Redux
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  // Navigation
  const navigate = useNavigate();

  // Side Effect -> Redirect to homepage when user logs in
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  //   Form Submit Handler
  function formSubmitHandler(e) {
    e.preventDefault();
    dispatch(registerUser(details));
  }
  return (
    <Wrapper>
      <div className="body">
        <form onSubmit={formSubmitHandler}>
          <div className="form-content">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
          </div>
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
        </form>
      </div>
    </Wrapper>
  );
}

export default AuthenticationPage;
