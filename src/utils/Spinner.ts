import styled from "styled-components";

export default styled.div`
  border-top: 4px solid #363740;
  border-left: 4px solid #363740;
  border-right: 4px solid #363740;
  border-bottom: 4px solid transparent;
  border-radius: 50%;

  width: 60px;
  height: 60px;

  position: absolute;
  left: calc(50% - 30px);
  top: calc(50% - 30px);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 0.6s linear infinite;
`;
