import {
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Nav from "./Resuables/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
