import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      {/* Header goes here */}
      <Header />

      {/* Homepage goes here */}
      <Home />

      {/* Footer goes here */}
    </div>
  );
}

export default App;
