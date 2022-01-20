import React from 'react';

export default function Header () {
    return(
        <div className="navbar-main-bg">
        <div className="container">
            <div className="navbar">
                <div className="nav1">
                    <h2>Author</h2>
                </div>
                <div className="nav2">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>                        
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
    )
}