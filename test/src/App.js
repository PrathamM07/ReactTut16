
import './App.css';
import Navbar  from './Navbar';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home';
import Search from './Search';
import PageNotFound from './PageNotFound';
function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/Search" component={Search}></Route>
      <Route exact path="**" component={PageNotFound}></Route>
      </Switch>
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
