import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App;
