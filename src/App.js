import logo from './logo.svg';
import './App.css';
import Login from './auth/Login'
import Register from './auth/Register';
import Home from './auth/Home'
import { Switch, Route } from 'react-router-dom'
import ProtectedRouter from './auth/protected'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRouter exact path="/home" component={Home} />
      </Switch>
      <ToastContainer />
    </div >
  );
}

export default App;
