import React from 'react';
import '../css/Header.css'; 
import logo from './Logo.png';

const Header = ({ routeChange }) => {
    
        return(
          
          <header className="db">
            <p className="db  v-mid link dim w-150 w-25-l tc mb2 "onClick={() => routeChange('home')} title="Home">
              <img src={logo} className="dib pa4 w2 br-100" alt="Site Logo"/>
            </p>
            <nav className="f6 fw6 tracked">
              <h1 className="link dim white dib tc">the force of the galaxy</h1>
              <p className="link dim white f6 f5-l fr mr3 mr4-l" onClick={() => routeChange('CardList')} title="Starships">Starships</p>
              <p className="link dim white f6 f5-l fr mr3 mr4-l" onClick={() => routeChange('planets')} title="Planets">Planets</p>
            </nav>
          </header>
          
        );
    }

export default Header;

