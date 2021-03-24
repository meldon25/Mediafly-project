import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FolderPage from './Pages/FolderPage'
import ItemPage from './Pages/ItemPage'

export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/folders">
          <FolderPage />
        </Route>
        <Route exact path="/items">
          <ItemPage />
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

