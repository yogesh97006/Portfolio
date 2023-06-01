// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import Routers from './Routes/Routers';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar style={{position:'sticky',top:'0'}} /> 
        <Routers />
    </BrowserRouter>
    </div>
  );
}

export default App;
