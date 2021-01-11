import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Picture from './components/picture/picture';
import fetchDog from './containers/action/fetchPicture';

class App extends React.Component{
  constructor(props){
    super()
  }
  componentDidMount(){
    this.props.dispatch(fetchDog())
  }
  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={NavBar}></Route>
            <Route path="/picture" exact component={Picture}></Route>
  
          </Switch>
        </Router>
        {/* <NavBar/> */}
        {/* <NavLink to = '/'>Home</NavLink> */}
       
      </div>
    );
  }
  
}

export default App;
