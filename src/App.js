import './App.css';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Reviews from './components/Reviews/Reviews';
function App() {
  return (
    <div className="App container mx-auto px-2">
     <Header />
      <Home />
      <Reviews /> 
   
    </div>
  );
}

export default App;
