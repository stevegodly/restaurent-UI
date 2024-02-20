import React from 'react';
import chef from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/chef.png';
import './Chef.css';
import sign from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/sign.png';
import quote from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/quote.png';
import spoon from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.png';
const Chef=()=>{
    return(
        <div className='gericht_chef section__padding app__bg flex__center'>
            <div className='gericht_chef-img flex__center'>
                <img src={chef} alt='chef'/>
            </div>

            <div className='gericht_chef-content'>
                <div className='gericht_chef-content-header'>
                    <p className='p__cormorant'>Chef's Word</p>
                    <img  className="spoon__img" src={spoon} alt="spoon"/>
                    <h1 className='headtext__cormorant'>What we believe in</h1>
                </div>

                <div className='gericht_chef-content-text'>
                    <img src={quote} alt="quote"/>
                    <p className='p__opensans' style={{color:'#AAAAAA'}}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                </div>

                <div className='gericht_chef-content-sign'>
                    <h4 className='p__cormorant' style={{color :'#DCCA87'}}>Kevin Luo</h4>
                    <p className='p__opensans'>Chef & Founder</p>
                </div>

                <div className='gericht_chef-content-image'>
                    <img src={sign} alt="sign"/>
                </div>
            </div>
        </div>
    );
}
export default Chef;