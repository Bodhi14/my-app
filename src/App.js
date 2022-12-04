import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" component={Home} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}
