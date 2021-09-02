import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
    <Topbar />
    <div>
    <About />
    <Portfolio />
    <Contact />
    </div>
    </div>
  );
}

export default App;
