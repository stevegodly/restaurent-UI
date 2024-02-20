import React from "react";
import spoon from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.png';
import './Newsletter.css';
const Newsletter=()=>{
    return(
        <div className="gericht-newsletter app__bg flex__center">
            <div className="gericht-newsletter-container flex__center">
                <p className="p__cormorant">Newsletter</p>
                <img src={spoon} alt="spoon" className="spoon__img"/>
                <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
                <div className="gericht-newsletter-container-placeholder">
                    <input type="email" placeholder="Email Address"/>
                    <button type="button">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
export default Newsletter;