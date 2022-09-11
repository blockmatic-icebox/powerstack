export const global_css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  #w3a-modal { z-index: 1096 !important; }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
  }

  button,
  input,
  textarea {
    font-family: 'Inter';
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  pre {
    overflow-y: auto;
  }
`
