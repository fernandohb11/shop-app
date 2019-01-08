import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import AuthorList from './components/authors/AuthorList';
import AuthPage from './components/auth/AuthPage'
import ProfilePage from './components/authors/ProfilePage';
import CreateStore from './components/create-store/CreateStore';
import myStores from './components/my-stores/myStores';
import ItemView from './components/create-store/ItemView';
import GetAllStores from './components/allstores/GetAllStores'
import StoreDetails from './components/create-store/StoreDetails';
import Stores from './components/allstores/Stores';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/api/authors" component={ AuthorList }/>
    <Route path="/login" component={AuthPage} />
    <Route path="/logout" component={AuthPage}/>
    <Route path="/signup" component={AuthPage}/>
    <Route path="/profile" component={ProfilePage}/>
    <Route path="/create-store" component={CreateStore}/>
    <Route path="/myStores" component={myStores} />
    <Route path="/itemview" component={ItemView} />
    <Route path="/allstores" component={GetAllStores} />
    <Route path="/storedetails" component={StoreDetails} />
    <Route path="/stores" component={Stores} />



  </Switch>
)

export default Routes;