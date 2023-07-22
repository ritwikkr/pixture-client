import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 80px;
  > .body {
    padding: 10px;
    border: 5px dashed rgb(246, 202, 3);
    width: 30%;
    margin: 50px auto 0;
    > .title {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      > label {
        margin-bottom: 5px;
      }
      > input {
        outline: none;
        border: none;
        height: 40px;
        font-size: 20px;
        padding-left: 10px;
        border-radius: 5px;
      }
      > button {
        height: 40px;
        font-size: 22px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    > .body {
      width: 35%;
    }
  }

  @media only screen and (max-width: 1000px) {
    > .body {
      width: 40%;
    }
  }

  @media only screen and (max-width: 800px) {
    > .body {
      width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    > .body {
      width: 80%;
    }
  }
`;

export default Wrapper;
