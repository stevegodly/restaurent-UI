import React from 'react';
import './Navbar.css';
import gericht from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/gericht.png'

const Menu=()=>(
    <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#Pages">Pages</a></p>
    <p><a href="#Contact Us">Contact Us</a></p>
    <p><a href="#Blog">Blog</a></p>
    <p><a href="#Landing">Landing</a></p>
    </>    
);

const Navbar=()=>{
    return(
        <nav className='gericht_Navbar'>
            <div className='gericht_Navbar-image'>
             <img src={gericht} alt="logo"/>
            </div>
            <div className='gericht_Navbar-menu p__opensans'>
                <Menu/>
            </div>
            <div className='gericht_Navbar-login p__opensans'>
                <a href="#login">Log In / Registration</a>
                <div/>
                <a href="/">Book Table</a>
            </div>
        </nav>    
    );
}        
export default Navbar;