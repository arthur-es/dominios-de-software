import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  background: #363740;

  img {
    height: 50px;
  }

  padding: 25px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

  h1 {
    font-size: 36px;
    line-height: 44px;
  }

  form {
    width: 100%;
    margin-top: 5px;

    input {
      margin-top: 15px;
      width: 100%;
      height: 40px;
      border-radius: 12px;
      padding-left: 16px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      outline: none;
      background: none;
      font-size: 15px;
      transition: 0.3s;

      :focus {
        border: 1px solid #29cc97;
      }

      color: rgba(255, 255, 255, 0.7);
    }

    button {
      margin-top: 20px;
      width: 100%;
      color: #363740;
      background: white;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;

      transition: 0.3s;

      :focus {
        border: 1px solid #29cc97;
      }

      :hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }

  a.password-recover {
    color: #1877f2;
    font-size: 15px;
    display: block;
    width: fit-content;

    margin: 0 auto;
    margin-top: 20px;

    :hover {
      text-decoration: underline;
    }
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    margin: 25px 0;
  }

  a.register {
    width: 100%;
    color: white;
    background: #29cc97;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    display: block;
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;

    transition: 0.3s;
  }

  span {
    color: rgba(255, 0, 0, 0.9);
    font-size: 14px;
    margin-top: 5px;
    display: inline-block;
  }
`;
