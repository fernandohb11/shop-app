import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';

import AuthorList from './components/authors/AuthorList';
import AuthPage from './components/auth/AuthPage'
// import Signup from './components/signup/Signup'
import ProfilePage from './components/authors/ProfilePage';
import CreateStore from './components/create-store/CreateStore';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/api/authors" component={ AuthorList }/>
    {/* <Route path="/signup" component={Signup}/> */}
    <Route path="/login" component={AuthPage}/>
    <Route path="/signup" component={AuthPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/create-store" component={CreateStore}/>
  </Switch>
)

export default Routes;