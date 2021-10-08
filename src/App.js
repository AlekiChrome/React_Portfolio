import Navbar from './Components/Navbar';
import SplashScreen from './Components/SplashScreen';
import Intro from './Pages/Intro';
import About from './Pages/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <SplashScreen />  */}
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
