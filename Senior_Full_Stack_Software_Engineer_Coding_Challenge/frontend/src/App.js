import React from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter,Route,Switch } from "react-router-dom";

//compnents import
import TopNews from "./components/topnews";
import AllNews from "./components/allnews";
import Page404 from "./components/page404";

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={['/top/:id','/','/top','/all']} render={(props)=>(<TopNews {...props}/>)}/>
          <Route exact path='/all/:id' component={AllNews} />
          <Route exact path='*' component={Page404}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
