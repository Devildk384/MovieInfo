import React from 'react';
import './SideDrawer.scss';


const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a className='btn' href='/'>
            HO<span>ME</span>
          </a>
        </li>
        <li>
          <a className='btn' href='/movies'>
            MOV<sapan>IES</sapan>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;