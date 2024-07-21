import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import AdminSignIn from './Pages/AdminSignIn';
import ContactMe from './Pages/ContactMe';
import AdminDashboard from './Pages/AdminDashboard';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import routes from './routes';
>>>>>>> main


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="aboutme" element={<AboutMe/>} />
        <Route path="contactme" element={<ContactMe/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="experience" element={<Experience/>} />
        <Route path="adminsignin" element={<AdminSignIn/>} />
        <Route path="admindashboard" element={<AdminDashboard/>} />
=======
      <Router>
      <Layout>
        <Routes>
        {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
>>>>>>> main
        </Routes>
      </Layout>
    </Router>
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



   
    

 
