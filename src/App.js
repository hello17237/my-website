import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js'
import AboutMe from './components/AboutMe/AboutMe';

function App({navlinks}) {
  const name = 'REGIS ZHAO'

  return(
    <>
      <Navbar navlinks={navlinks}/>
      <Home name={name}/>
      <AboutMe />
    </>
  )
}

export default App;
