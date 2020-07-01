import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import MultichoiceController from './containers/Multichoice/Controller/MultichoiceController';
import PGddlController from './containers/Multichoice/Controller/PGddlController'
import TextInputController from './containers/TextInput/Controller/TextInputController';

class App extends Component{
  
  render(){
    
    
      return (
        <React.Fragment>
       
          <TextInputController />
          <MultichoiceController />
          <PGddlController />
            
          
          
         
        </React.Fragment>
          
      );
              
      
  }
}


export default App;




 /*<Aux>
          <div>
            <header>
              <nav>
                <ul>
                 <li><NavLink to="/" exact>Drop down</NavLink></li>
                  <li><NavLink to="/TextInput">Text input</NavLink></li>
                  <li><NavLink to="/RadioButtons">Radio buttons</NavLink></li>
                </ul>

              </nav>
            </header>
          </div>
          <Switch>
            <Route path="/" exact component={ DropDownDataLoader } />
            <Route path="/TextInput" component={ TextInputDataLoader } />
            <Route path="/RadioButtons" component={ DropDownDataLoader } />
          </Switch>
           
      </Aux> */ 