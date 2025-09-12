import { useState } from "react";
import "./App.css"; // <-- connects CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to My Counter App</h1>

      {/* Show header only if count > 0 */}
      {count > 0 && <h2 className="counter-header">Counter now is: {count}</h2>}

      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <span className="value">{count}</span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}

export default App;
