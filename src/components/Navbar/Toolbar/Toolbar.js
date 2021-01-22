import React from 'react'
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/ToggleButton';
import './Toolbar.scss'

export default function Toolbar({isOpen , drawerClickHandler}) {
    return (
        <header className="toolbar">
        <div className="toolbar-wrapper">
          <nav className="toolbar__navigation">
            <div className="toolbar__logo">
              <Link to="/">
               
               <a className="logo" > Movie<span>Info</span></a>
              </Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {/* <Link to="/movies/now-playing">Movies</Link> */}
                  <Link to="/movies">Movies</Link>
                </li>
              </ul>
            </div>
            <ToggleButton isOpen={isOpen} click={drawerClickHandler} />
          </nav>
        </div>
      </header>
    )
}
