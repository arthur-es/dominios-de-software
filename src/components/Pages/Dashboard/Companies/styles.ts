import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1750px;
  margin-top: 50px;

  h1 {
    font-size: 32px;
    line-height: 36px;
    color: #363740;
  }

  @media (max-width: 1782px) {
    padding: 0 16px;
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;

  margin-top: 30px;
`;

export const Company = styled.div`
  width: 100%;
  max-width: max-content;
  padding: 15px 25px;

  background: #22ab7e;

  p {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  color: white;

  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
`;

export const CreateCompany = styled.button`
  width: 100%;
  max-width: 230px;

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
`;
