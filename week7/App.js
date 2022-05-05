import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Jokes from './Pages/Jokes';
import Giphy from './Pages/Giphy';
import NoMatch from './Pages/NoMatch';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <li className="links"><Link to="/">Home</Link></li>
          <li className="links"><Link to="/jokes">Jokes</Link></li>
          <li className="links"><Link to="/giphy">Giphy</Link></li>
        </header>
        <main>
          <Routes>
            <Route exact ={true} path ="/" element={<Home/>}/>
            <Route path="/jokes" element={<Jokes/>}/>
            <Route path="/giphy" element={<Giphy initialQuery="jokes"/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;