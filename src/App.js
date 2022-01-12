import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SplashScreen from './Components/SplashScreen';

// Pages
import Intro from './Pages/Intro';
import About from './Pages/About';
import aboutMePage from './Pages/aboutMePage';
import Skills from './Pages/Skills';
import FeaturedWork from './Pages/FeaturedWork';
import Design from './Pages/Design';
import Contact from './Pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SplashScreen /> 
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <FeaturedWork />
      <Design />
      {/* <Contact /> */}
      <Switch>
        <Route path="/aboutmepage" component={aboutMePage} />
      </Switch>
      
    </div>
  );
}

export default App;
