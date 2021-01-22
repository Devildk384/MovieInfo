import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss'

function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            
            {children}
        </div>
    )
}

export default Layout;
