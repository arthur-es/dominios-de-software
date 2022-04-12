import styled from "styled-components";

export const Toaster = styled.div`
  .toaster-default {
    background: #150d21;
    color: white;
    z-index: 30;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    svg {
      color: white;
    }
  }
  .progress-default {
    background-image: linear-gradient(
      to right,
      #c788ff,
      #bb77f7,
      #af66f0,
      #a354e8,
      #9741e0,
      #8d36d8,
      #8229d0,
      #781bc8,
      #6e15be,
      #640eb5,
      #5a06ab,
      #5000a2
    );
  }
  .toaster-error {
    background: #ff2e6e;
    color: white;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    svg {
      color: white;
    }
  }
  .progress-error {
    background: #ff80a7;
  }
  .toaster-confirmation {
    background: #29d3a6;
    color: white;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    svg {
      color: white;
    }
  }
  .progress-confirmation {
    background: #aae3d4;
  }
`;
