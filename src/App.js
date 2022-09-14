import "./App.css";
import { SignUp } from "./components/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigate to="signup" />} path="/" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
