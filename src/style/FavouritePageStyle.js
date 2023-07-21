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
    > .empty {
      > p:nth-child(2) {
        /* border: 2px solid red; */
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
      }
    }
  }
`;

export default Wrapper;
