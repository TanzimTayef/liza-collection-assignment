import './App.css';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import ReviewPage from './components/ReviewPage/ReviewPage';
import Reviews from './components/Reviews/Reviews';
function App() {
  return (
    <div className="App container mx-auto px-2">
      {/* <Header />
      <Home />
      <Reviews /> */}
      <ReviewPage/>
    </div>
  );
}

export default App;
