import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import '../../assets/stylesheets/main.scss'
// components
import MovieDetails from "./main/MovieDetails";
import MoviesTable from "./main/MovieTable";
import Search from "./main/Search"
import Navigation from "./shared/Navigation";

const App = (props) => {
  const { csrf_token } = props
  return (
    <React.Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/' component={ Search }/>
          <Route path='/movie-details/:id' render={ (props) => <MovieDetails {...props} token={ csrf_token }/> }/>
          <Route exact path='/movie-ratings' component={ MoviesTable }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App
