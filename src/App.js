import './App.css';
import Navbar from './components/NavBar/NavBar';
import Book from './components/Book/Book';

function App() {
  return (
    <>
    <Navbar />
    <Book title="The Hunger Games" author="Suzanne Collins"/>
    </>
  );
}

export default App;
