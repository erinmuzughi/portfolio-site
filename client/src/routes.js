// src/routes.js
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Experience from './Pages/Experience';
import ProjectsPage from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import adminSignIn from './Pages/AdminSignIn';
import adminDashboard from './Pages/AdminDashboard';

const routes = [
  { name: 'Home', path: '/', component: HomePage},
  { name: 'About Me', path: '/about', component: AboutMe },
  { name: 'Experience', path: '/experience', component: Experience },
  { name: 'Projects', path: '/projects', component: ProjectsPage },
  { name: 'Contact Me', path: '/contactme', component: ContactMe },
];

export default routes;
