import React from 'react';
import './AboutUs.css';
import g from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/G.png';
import spoon from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.svg';
import spoons from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.png';
import knife from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/knife.png';
const AboutUs=()=>{
    return(
        <div className='gericht_aboutus flex__center app__bg section__padding' id="about">
            <div className='gericht_aboutus-bg flex__center'>
                <img src={g} alt="g"/>
            </div>
            <div className='gericht_aboutus-content flex__center'>
              <div className='gericht_aboutus-history'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={spoon} alt="spoon" className='spoon__img'/>
                <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type="button" className='custom__button'>Know More</button>
              </div>
              <div className='gericht_aboutus-image flex__center'>
                <img src={knife} alt="knife"/>
              </div>
              <div className='gericht_aboutus-text'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={spoons} alt="spoon"  className='spoon__img'/>
                <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                <button type="button" className='custom__button'>Know More</button>
              </div>
            </div>
        </div>
        
    );
}
export default AboutUs;