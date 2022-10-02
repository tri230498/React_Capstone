import { Outlet } from 'react-router-dom';
import Footer from './components/headerHome/Footer';
import Header from './components/headerHome/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
