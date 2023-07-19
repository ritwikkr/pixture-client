import React from "react";
import LoadingScreen from "react-loading-screen";

function Loading() {
  return (
    <LoadingScreen
      loading={true}
      bgColor="black"
      spinnerColor="#9ee5f8"
      textColor="#676767"
      text="Please Wait"
    ></LoadingScreen>
  );
}

export default Loading;
