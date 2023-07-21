import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  padding: 20px;
  > .body {
    margin-top: 30px;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
`;

export default Wrapper;
