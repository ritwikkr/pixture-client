import styled from "styled-components";

const Wrapper = styled.header`
  height: 80px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px 100px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(246, 202, 3);
    color: black;
    font-weight: 900;
    font-size: 2rem;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    margin-right: 30px;
  }
  nav {
    .ham {
      display: none;
      i {
        color: white;
      }
    }
    ul {
      display: flex;
      width: 50vw;
      justify-content: space-between;
      li {
        font-size: 1.5rem;
        list-style: none;
      }
    }
  }

  @media only screen and (max-width: 865px) {
    nav {
      ul {
        li {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 780px) {
    nav {
      ul {
        li {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 620px) {
    position: relative;
    .logo {
      margin: auto;
    }
    nav {
      z-index: 2;
      .ham {
        cursor: pointer;
        display: block;
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
        font-size: 32px;
      }
      ul {
        background-color: black;
        transition: all 0.5s ease-in-out;
        position: absolute;
        left: 0;
        top: 100%;
        height: 90vh;
        transform: translateX(-120vw);
        flex-direction: column;
        padding-left: 20px;
        justify-content: flex-start;
        li {
          margin: 10px 0;
        }
      }
      ul.showNav {
        transform: translateX(0);
      }
    }
  }
`;

export default Wrapper;
