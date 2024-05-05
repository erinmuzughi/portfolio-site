import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="AboutMe" element={<AboutMe/>} />
      

        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
