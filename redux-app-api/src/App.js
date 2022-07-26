import Login from './Login';
import Dashboard from './Dashboard'
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
