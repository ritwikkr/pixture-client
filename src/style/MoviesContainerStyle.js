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
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .tile {
        cursor: pointer;
        position: relative;
        width: 250px;
        height: 350px;
        margin: 5px;
        transition: all 0.2s ease-in-out;
        img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        &:hover {
          border: 5px solid gray;
          z-index: 1;
          transform: scale(1.1);
        }
        &:hover .details {
          display: block;
        }
        &:hover .backdrop {
          display: block;
        }
        .details {
          z-index: 1;
          display: none;
          padding: 20px;
          position: absolute;
          bottom: 0;
          .title {
            font-weight: bolder;
            font-size: 1.5rem;
          }
          .date-rating {
            margin: 5px 0;
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;
          }
          .desc {
            font-weight: 550;
          }
        }
        .backdrop {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.5;
        }
      }
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
