import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1750px;

  h2 {
    font-size: 30px;
  }

  margin-top: 50px;

  @media (max-width: 1782px) {
    padding: 0 16px;
  }

  button {
    width: 100%;
    max-width: 250px;
    margin-top: 30px;

    background: white;
    border: 1px dashed #22ab7e;
    border-radius: 8px;
    padding: 15px 25px;

    color: #22ab7e;
    font-size: 18px;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 15px;

    ::after {
      content: "+";
      color: #22ab7e;
      font-size: 25px;
      line-height: 20px;
      margin-left: auto;
    }
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const Feedback = styled.div`
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
    margin-top: 5px;
  }

  div + h4 {
    margin-top: 40px;
  }
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  border-top: 3px solid #363740;
  border-bottom: 3px solid #363740;
  border-left: 3px solid #363740;
  border-right: 3px solid transparent;

  animation: infinite 0.6s linear ${spin};

  margin-top: 40px;
  margin-left: 80px;
`;
