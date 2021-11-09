import './App.css';
import {Switch, Route} from "react-router-dom";
import {members} from './Components/Members/index'
import  Home from'./Components/Home/index'
import {Customer} from './pages/Customer/customer'
import {Company} from './pages/Company/company'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
        <Route  path="/customer/:id">
           <Customer/>
        </Route>
          <Route  path="/company/:id">
              <Company/>
          </Route>
              <Route  path="/">
                <div className="Home">
                <Home members={members}/>
                </div>
              </Route>
       </Switch>
      </header>
    </div>
  );
}

export default App;
