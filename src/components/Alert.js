import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { hideAlert } from "../store/slices/alertSlice";

function Alert() {
  // Redux
  const dispatch = useDispatch();
  const { show, alertText, alertType } = useSelector((state) => state.alert);

  // Side Effect -> Hide Alert after 3 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      return () => {
        clearTimeout(timer);
        dispatch(hideAlert()); // Hide the alert on unmount
      };
    }
  }, [show, dispatch]);

  if (!show) return null;

  // Get the appropriate background color based on the alertType
  const backgroundColor = alertType === "success" ? "green" : "red";

  return (
    <Wrapper>
      <div className="alert" style={{ backgroundColor }}>
        <p>{alertText}</p>
      </div>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  .alert {
    margin-bottom: 10px;
    top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
`;
