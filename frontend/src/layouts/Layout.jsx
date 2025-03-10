import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/layout.css'; 

const Layout = ({ children }) => {
    return (
        <div className="layout-container"> 
            <Navbar />
            <main className="body"> 
                {children}
            </main>
            <Footer id="footer" />
        </div>
    );
};

export default Layout;