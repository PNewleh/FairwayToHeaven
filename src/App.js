import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Players from "./pages/Players";
import Scores from "./pages/Scores";
import NavBar from "./nav";
import Golfer from "./images/golfer.png"

function App() {
  return (
    <div className='content'>
      <header>
        <img className='golfer' src={Golfer}></img><h1>Fairway To Heaven</h1>
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
