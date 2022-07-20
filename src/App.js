import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <button className="btn btn-primary">hello</button>
      <h3 className="text-primary">how are you</h3>
    </div>
  );
}

export default App;
