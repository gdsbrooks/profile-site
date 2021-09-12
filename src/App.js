import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
    <Topbar />
      <div className="main">
        <Intro />
        <About />
        <Portfolio />
        <Contact /> 
      </div>
    </div>
  );
}

export default App;
