import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Reviews from './components/Reviews/Reviews';
import Navbar from './components/Navbar/Navbar';
import Error from './components/Error/Error';
import Dashboard from './components/Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
