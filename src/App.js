import "./App.css";
import Login from "./Components/Navbar/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login/>
    </div>
  );
}

export default App;
