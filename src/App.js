import "./App.css";
import { SignUp } from "./components/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
