
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './Login';


function App() {
  
  return (
    <div className="App">
      <Login/>
      <Home/>
      {/* <Lender/> */}
    </div>
  );
}

export default App;
