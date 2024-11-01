import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login'
import Dashborad from './pages/Dashborad';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
          <Route path='/dashboard' Component={Dashborad}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
