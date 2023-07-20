import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid blue;
  height: calc(100vh - 80px);
  > .body {
    border: 2px solid red;
    width: 30%;
    margin: 50px auto 0;
  }
`;

export default Wrapper;
