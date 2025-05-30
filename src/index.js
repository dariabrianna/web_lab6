// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './index.css';
import App from './App';
import { lightTheme, darkTheme } from './themes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
    font-family: sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }
`;

function Root() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 1000,
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          background: isDark ? lightTheme.buttonBg : darkTheme.buttonBg,
          color: isDark ? lightTheme.buttonText : darkTheme.buttonText,
        }}
        onClick={() => setIsDark(d => !d)}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <App />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
