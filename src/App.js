import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="React-BookStore/">
            <Route index element={<Books />} />
            <Route path="CATEGORIES" element={<Categories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
