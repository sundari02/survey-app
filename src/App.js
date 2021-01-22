import React, { Component } from "react";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
} from "react-router-dom";

//import fire from './fire';


import MyInfo from "./components/MyInfo"; ///< index.jsx will be automatically imported 
import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";


class App extends Component {
  
  render() {

    return (
        <div className="App">
        <header><h1>Survey Page</h1>
       
        </header>
        
        
      <Router>
        <nav>
            <a className="link"><Link to="/MyInfo" >Home</Link></a>
            <a className="link"><Link to="/Survey" >Survey 1</Link></a>
            <a className="link"><Link to="/Survey2" >Survey 2</Link></a>
            
          
        </nav>

        <Switch>
          <Route path="/MyInfo">
            <MyInfo />
          </Route>
          <Route path="/Survey">
            <Survey />
          </Route>
          <Route path="/Survey2">
            <Survey2 />
          </Route>
        </Switch>
      </Router>
      
    </div>
    
    );
  }
  
}



import ReactDOM from "react-dom"
ReactDOM.render(<App />, document.getElementById("root"))


//export default App;