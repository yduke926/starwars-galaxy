import React, { Component } from 'react';
import '../css/App.css';
import * as apiRoutes from '../API/api_routes';
import apiCall from '../API/api';
import Home from '../components/Home/Home';
import SearchBox from'../components/Searchbox';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import PlanetList from '../components/PlanetList';
import Footer from '../components/Footer';



class App extends Component {
  constructor(){
    super()
    this.state = {
      starships: [],
      planets: [],
      searchfield: '',
      route: 'home'
    }
  }

  componentDidMount() {
        apiCall(apiRoutes.REQ_STARSHIPS).then(ships => this.setState({ starships: ships.results }));
        apiCall(apiRoutes.REQ_PLANETS).then(planets => this.setState({ planets: planets.results }));
  }

  onSearchChange = ( event ) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = ( route ) => {
    this.setState({ route: route });
  }
  
  render() {
    const { starships, planets, searchfield } = this.state;
    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    const filteredPlanets = planets.filter(planet => {
      return planet.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    if (!this.state.starships.length) {
      return <h1 className='tc f1 mv5' style={{ 'color': 'white'}}>LOADING...</h1>
    }
    else {
      return (
        <div className="App tc">
        <Header routeChange={ this.onRouteChange }/>
        {
          this.state.route === 'home'?
            <div>
              <Home />
            </div>
            : null
        }
        {
          this.state.route === 'CardList'?
          <div>
            <SearchBox searchChange={ this.onSearchChange }/>
              <Scroll>
                <CardList starships = {filteredStarships}/>
              </Scroll>
          </div>
          : null
        }
        {
          this.state.route === 'planets' ?
          <div>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <PlanetList planets={filteredPlanets} />
            </Scroll>
          </div>
          : null
        }
        <Footer />
      </div>
      );
    }
  }
}
export default App;

