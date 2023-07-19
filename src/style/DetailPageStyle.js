import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 100px;
  .poster {
    height: 50vh;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .movie {
    margin-top: -200px;
    padding: 20px;
    display: flex;
    .image {
      width: 500px;
      height: 500px;
      margin-right: 30px;
      img {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        /* width: 100%; */
        height: 100%;
        border-radius: 10px;
        object-fit: contain;
      }
    }
    .details {
      .heading {
        font-size: 1.8rem;
        p {
          font-size: 1.2rem;
        }
      }
      .ratings {
        display: flex;
        width: 200px;
        justify-content: space-between;
        margin: 5px 0;
      }
      .length {
        margin: 5px 0;
      }
      .genres {
        display: flex;
        margin-bottom: 30px;
        .genre_tile {
          border-radius: 20px;
          margin: 10px 10px 10px 0;
          border: 2px solid white;
          padding: 10px;
        }
      }
    }
  }
  .links {
    text-align: center;
    .heading {
      margin-bottom: 20px;
    }
    .body {
      button {
        padding: 20px 40px;
        border-radius: 25px;
        font-weight: bolder;
        font-size: 1.1rem;
        margin: 0 20px;
        border: none;
        outline: none;
        cursor: pointer;
        i {
          margin-left: 20px;
        }
      }
    }
    .homepage {
      background-color: red;
    }
    .imdb {
      background-color: rgb(246, 202, 3);
    }
  }
  .company {
    margin-top: 60px;
    text-align: center;
    .logos {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      height: 80px;
      .logo {
        width: 200px;
        height: 100%;
        margin: 0 10px 0 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .movie {
      .image {
        /* border: 2px solid blue; */
        width: 400px;
        height: 300px;
        img {
          /* width: 100%;
          height: 100%; */
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .movie {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 50px;
      .image {
        margin-bottom: 30px;
      }
      .details {
        .ratings {
          margin: auto;
        }
        .genres {
          justify-content: center;
        }
      }
    }
    .links {
      flex-direction: column;
      height: 200px;
    }
    .company {
      .logos {
      }
    }
  }
`;

export default Wrapper;
