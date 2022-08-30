import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #2CC3D5;

  --background: #E5E5E5;

  --text-white: #F8FBFB;

  /* --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #888888;
    --gray-800: #494D4B; */

    --gray-500: #738192;

    --border-radius-container: 10px;
    --border-radius-btn: 5px;
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
  button {
    cursor: pointer;
  }
  [disabled] {
  opacity: 0.6;
  cursor: not-allowed;
  }
}`;
