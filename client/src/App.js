import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';
import ContactMe from './Pages/ContactMe';
import Experience from './Pages/Experience';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="aboutme" element={<AboutMe/>} />
        <Route path="contactme" element={<ContactMe/>} />
        <Route path="experience" element={<Experience/>} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
 );
}

export default App;




   
    

 
