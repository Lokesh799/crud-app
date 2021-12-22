import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavLink from './container/NavLink';
import Registration from './component/Registartion';
import Login from './component/Login';
import addItem from './component/addItem';
import deleteItem from './component/deleteItem';
import updateItem from './component/updateItem';
import showItem from './component/showItem';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <NavLink />
        <Switch>

          <Route exact path="/login" component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/add" component={addItem} />
          <Route path="/dlt" component={deleteItem} />
          <Route path="/update" component={updateItem} />
          <Route path="/show" component={showItem} />

          )
          {/*           
          <PublicRoute path="/registration" component={Registration} />
          <PublicRoute path="/login" component={Login} />

          <PrivateRoute path="/product" component={Product} />
          <PrivateRoute path="/famlies" component={Famlies} />
          <PrivateRoute path="/location" component={Location} />
          <PrivateRoute path="/transaction" component={Transactions} /> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;