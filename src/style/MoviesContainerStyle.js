import styled from "styled-components";

const Wrapper = styled.div`
  .popular {
    padding: 20px 80px;
    h1 {
      padding-left: 80px;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    .body {
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1000px) {
    .popular {
      h1 {
        text-align: center;
        padding: 0;
      }
    }
  }
`;

export default Wrapper;
