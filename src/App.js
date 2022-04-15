
import './App.css';
import Discover from './components/Discover';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <header>
       <Navbar/>
     </header>
     <body>
       <Hero/>
       <Discover />
     </body>
    </div>
  );
}

export default App;
