import styled, { keyframes } from "styled-components";

const flipHeartX = keyframes`
  from {
    transform: perspective(800px) rotateY(0deg);
  }
  to {
    transform: perspective(800px) rotateY(360deg);
  }
`;

const Wrapper = styled.header`
  height: 80px;
  position: fixed;
  z-index: 100;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      a {
        margin: 0 20px;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          bottom: 2;
          left: 0;
          width: 0;
          height: 5px;
          background-color: white;
          transition: width 0.3s ease;
        }
        &:hover:after {
          width: 100%;
        }
        li {
          font-size: 1.5rem;
          list-style: none;
        }
      }
    }
  }
  > .login {
    display: flex;
    align-items: center;
    > .fav {
      font-size: 22px;
      cursor: pointer;
      margin-right: 20px;
      color: red;
      &:hover {
        animation: ${flipHeartX} 1s linear; /* Adjust the animation duration as needed */
      }
    }
    p {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 940px) {
    nav {
      ul {
        li {
          font-size: 1.2rem !important;
        }
      }
    }
  }

  @media only screen and (max-width: 850px) {
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
  @media only screen and (max-width: 460px) {
    padding: 0;
    justify-content: space-around;
    > .logo {
      margin: 0;
      margin-left: 30px;
      width: 80px;
      p {
        font-size: 20px;
      }
    }
  }
`;

export default Wrapper;
