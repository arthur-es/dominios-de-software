import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
    scroll-margin-top: 70px;
  }
  img {
    pointer-events: none;
    user-select: none;
  }
  a {
    text-decoration:none;
  }
  p, h1, h2, h3, h4, span, li, a {
    color: #252733;
    transition: color 0.15s linear;
  }
  li, ul {
    list-style:none;
    margin: 0;
    padding: 0;
  }
  body.modal-open{
    overflow: hidden;
  }
  button {
    cursor: pointer;
  }

  .Toastify{
    z-index: 100;
  }
`;
