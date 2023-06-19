import {
  BrowserRouter as Router,  // Apenas renomeando
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Companies from './pages/Companies';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Header from './components/SharedComponents/Header';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* Definição das rotas */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='empresas' exact element={<Companies />} />
          <Route path='empresas/:empresa' exact element={<Companies />} />
          <Route path='faq' exact element={<FAQ />} />
          <Route path='contato' exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
