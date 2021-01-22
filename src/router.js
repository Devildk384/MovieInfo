import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';


import {Switch,Route, withRouter} from 'react-router-dom';
import MovieInfo from './pages/MovieInfo/MovieInfo';
import Movies from './pages/Movies/Movies';


class Routes extends Component {
    render(){
    return (
        <Layout>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movieinfo/:movie_id" component={MovieInfo} />
            <Route exact path="/movies" component={Movies} />
            


            </Switch>
        </Layout>
    )
}
}

export default withRouter(Routes);
