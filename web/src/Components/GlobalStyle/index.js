import { createGlobalStyle } from "styled-components";
import resetCSS from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${resetCSS};

  @import url('https://fonts.googleapis.com/css?family=Changa:200,300,400,500,600,700,800|Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Titillium+Web:200i,300,300i,400,400i,600,600i,700,700i,900');

    html {
    /* background-color:#e6e6e4; */
    height:100%;
    }
    *{
    box-sizing:border-box;
    }

    body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color:#FAFAFA;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
    }

    a {
    color:inherit;
    text-decoration:none;
    }



    input{
      position: relative;
      min-width: 300px;
      height: 52px;
      border-radius: 3px;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 15px;
      text-align: center;
      width: 100% !important;
      padding: 0 20px;
      outline: 1px #2e2e2e !important;
      border: 1px solid #fff !important;
    }
    input.shake {
      animation-name: shaker;
      animation-duration: 200ms;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
    }

    input:focus {
      outline: 0;
        color: rgba(0,0,0,0.8);
      }

    input::placeholder {
      color: rgba(0,0,0,0.33);
      }

`;

export default GlobalStyle;
