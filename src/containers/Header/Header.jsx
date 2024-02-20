import React from 'react';
import './Header.css';
import welcome from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/welcome.png'
import spoon from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.png';
const Header=()=>{
    return(
        <div className='gericht_header section__padding'>
            <div className='gericht_header-content'>
                <p className='gericht_header-content-p p__cormorant'>Chase the new Flavour</p>
                <img src={spoon} alt="spoon"/>
                <h1 className='gericht_header-content-h'>The key to Fine dining</h1>
                <p className='gericht_header-content-pp p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <div className='gericht_header-button'>
                   <button type="button">Explore Menu</button>
                </div>
                
            </div>
            <div className="gericht_header-image">
                <img src={welcome} alt="logo"/>
            </div>
        </div>
    );
}
export default Header;