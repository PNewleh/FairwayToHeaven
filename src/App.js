import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Players from "./pages/Players";
import Scores from "./pages/Scores";
import NavBar from "./nav";

function App() {
  return (
    <div className='content'>
      <header>
        <h1>Fairway To Heaven</h1>
      </header>
    
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  </div>
)
}


export default App;
