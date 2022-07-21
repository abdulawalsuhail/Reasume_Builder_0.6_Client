import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignIn from "./Shared/SignIn/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <SignIn></SignIn> */}
    </div>
  );
}

export default App;
