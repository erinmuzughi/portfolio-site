import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import routes from './routes';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Routes>
        {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
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



   
    

 
