import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 512px;

  margin: 0 auto;
  margin-top: 30px;

  padding: 20px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h2 {
    font-size: 32px;
    font-weight: 700;

    margin: 0 auto;
    width: fit-content;
  }

  h3 {
    color: #29cc97;
    font-size: 30px;
    margin: 0 auto;
    width: fit-content;
    margin-top: 30px;
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  border-top: 3px solid #363740;
  border-bottom: 3px solid #363740;
  border-left: 3px solid #363740;
  border-right: 3px solid transparent;

  animation: infinite 0.6s linear ${spin};

  margin: 0 auto;

  margin-top: 30px;
`;
