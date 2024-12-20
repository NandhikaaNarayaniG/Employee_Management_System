import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'; 
import Home from "./pages/Home";
import Add from './pages/Add';



  function App() {
  return (
    <div className="App">
       <Router>
      <div>
        
        
        <Link to="/">Home</Link>
        <Link to="/Add">Add</Link>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/Add" element={<Add/>}/>
        </Routes>
      </div>
    </Router>
    </div>)}
 

export default App;
