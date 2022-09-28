import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;