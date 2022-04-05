import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import ReviewPage from "./components/Pages/ReviewPage"
import Navbar from './components/Navbar/Navbar';
import Error from './components/Error/Error';
import Dashboard from './components/Pages/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviewsPage" element={<ReviewPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/about" element={<About/>} / > 
        
      <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
