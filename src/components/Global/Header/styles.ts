import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: center;

  height: 60px;
  background: #363740;

  border-bottom: 1px solid #e4e4e4;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1750px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
  }

  @media (max-width: 1782px) {
    padding: 0 16px;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  max-width: 150px;

  height: 40px;
  border-radius: 8px;
  background: #29cc97;
  color: white;

  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
`;
