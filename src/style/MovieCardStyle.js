import styled from "styled-components";

const Wrapper = styled.div`
  .tile {
    cursor: pointer;

    position: relative;
    overflow-y: hidden;
    width: 250px;
    height: 350px;
    margin: 5px;
    transition: all 0.2s ease-in-out;
    > .heart {
      display: none;
      position: absolute;
      color: red;
      right: 5%;
      z-index: 10;
      top: 2%;
      font-style: 30px;
      > i {
        font-size: 30px;
      }
    }
    &:hover .heart {
      display: block;
    }
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
    &:hover .details,
    &:hover .backdrop {
      display: block;
    }
    .details {
      z-index: 1;
      /* display: none; */
      padding: 15px;
      position: absolute;
      bottom: 0;
      transition: all 0.2s ease-in;
      transform: translateY(100%);
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
    &:hover .details {
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
