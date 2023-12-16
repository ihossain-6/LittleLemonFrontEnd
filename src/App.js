import './App.css';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
