import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid blue;
  height: calc(100vh - 80px);
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
`;

export default Wrapper;
