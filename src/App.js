import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Susimara";

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">S1-26</header>
      <main>
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          login={login}
          logout={logout}
        />
      </main>
    </div>
  );
}

export default App;
