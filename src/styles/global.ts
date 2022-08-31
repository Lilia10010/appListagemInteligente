import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #2CC3D5;

  --background: #F5F8F9;

  --text-white: #F8FBFB;

  /*  --gray-200: #AFB2B1;
  --gray-500: #888888;
  --gray-800: #494D4B; */

    --gray-10: #8CA0B3;
  
    --gray-50: #D2DFE6; //cor do list no selected

    --gray-200: #607B99; //titulo favorito
    
    --gray-250: #738192; // tipo do contato
    --gray-300: #56616E; //tile my chatbots
    --gray-350: #52636C; //sub titulo nome do contato

    --gray-500: #738192;

    --border-radius-container: 7px;
    --border-radius-btn: 8px;

    --box-shadow-container: 0px 2px 12px rgba(96, 123, 153, 0.15);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
@media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}

@media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
}

.App{
    min-height: 100vh;
    position: relative;

}

body {
    background-color: var(--background);
    color: var(--text-primary);
}
body, input, textarea, button {
    font: 400 1rem "Nunito Sans", sans-serif;
    color: var(--text-primary);
}

h1, h2, h3, h4, h5, h6, p {
    color: var(--text-primary);
}
a{
    text-decoration: none;
}
  button {
    cursor: pointer;
  }
  [disabled] {
  opacity: 0.6;
  cursor: not-allowed;
  }
}`;
