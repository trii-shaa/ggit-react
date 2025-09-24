import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header /> {/* Header at the top */}

      <main>
        <h2>Welcome to My Counter App</h2>

        {count > 0 && <h3 className="counter-header">Counter now is: {count}</h3>}

        <div className="buttons">
          <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
          <span className="value">{count}</span>
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        </div>

        <Home /> {/* Main content */}
      </main>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
