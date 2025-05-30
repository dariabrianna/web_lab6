// src/App.js
import React from "react";
import Header from "./components/Header/Header";
import Board  from "./components/Board/Board";
import useAuth from "./hooks/useAuth";

function App() {
  const authReady = useAuth();

  return (
    <>
      {/* afișează header-ul întotdeauna */}
      <Header />

      {/* dacă nu suntem autentificați încă, arată un loader */}
      {!authReady ? (
        <p style={{ padding: 20, textAlign: "center" }}>
          Authenticating… please wait
        </p>
      ) : (
        <Board />
      )}
    </>
  );
}

export default App;
