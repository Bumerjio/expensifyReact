import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

import ExpenseDashBoardPage from '../component/ExpenseDashBoardPage';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import Header from '../component/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
