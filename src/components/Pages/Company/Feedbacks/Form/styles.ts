import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FormModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  animation: ${fadeIn} 0.3s linear;
  padding: 20px;
  z-index: 90;

  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 1;
    color: white;
    cursor: pointer;
    z-index: 200;
  }

  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: white;
  }

  .close:before {
    transform: rotate(45deg);
  }

  .close:after {
    transform: rotate(-45deg);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;

  span {
    color: rgba(255, 0, 0, 0.9);
    font-size: 14px;
    margin-top: 5px;
    display: inline-block;
  }

  h2 {
    font-size: 28px;
    line-height: 32px;
    margin: 0 auto;
    color: white;
    width: fit-content;
  }

  form {
    width: 100%;
    margin-top: 20px;

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

      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba(255, 255, 255, 0.5);
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgba(255, 255, 255, 0.5);
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: rgba(255, 255, 255, 0.5);
      }

      color: rgba(255, 255, 255, 0.7);
    }

    button {
      margin-top: 40px;
      width: 100%;
      color: white;
      background: #29cc97;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;

      transition: 0.3s;

      :disabled {
        cursor: not-allowed;
        filter: opacity(90%);
      }
    }
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  border-top: 3px solid white;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  border-right: 3px solid transparent;

  animation: infinite 0.6s linear ${spin};

  margin: 0 auto;
`;
