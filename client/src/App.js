import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';
import ContactMe from './Pages/ContactMe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="aboutme" element={<AboutMe/>} />
   <Route path="contactme" element={<ContactMe/>} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
 );
}

export default App;


/*

function decode (message_file){


  1. create hash map where the number is the key and the word is the value

  let messageMap= new Map();


  let decodedMessage=

  return decodedMessage
}
*/



   
    

 
