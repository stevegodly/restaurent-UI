import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import spoon from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/spoon.png';
import gallery1 from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/gallery01.png';
import gallery2 from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/gallery02.png';
import gallery3 from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/gallery03.png';
import gallery4 from 'C:/Users/user.USER/source/repos/gericht-restaurent/src/assets/gallery04.png';
import './Gallery.css';
const Gallery=()=>{
    return(
        <div className='gericht_gallery app__bg'>
            <div className='gericht_gallery-header'>
                <p className='p__cormorant' style={{marginBottom:'6px'}}>Instagram</p>
                <img src={spoon} alt="spoon" className='spoon__img'/>
                <h1 className='headtext__cormorant' style={{marginTop:'17px'}}>Photo Gallery</h1>
                <p className='p__opensans' style={{color:"#AAAAAA"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type="button" className='gericht_gallery-header-button'>View More</button>
            </div>
            <div className='gericht_gallery-photos'>
                <img src={gallery1} alt="galarry1"/>
                <img src={gallery2} alt="galarry1"/>
                <div className='image-card flex__center'>
                    <img src={gallery3} alt="galarry1" />
                    <BsInstagram className="gallery__image-icon"/>
                </div>
                <img src={gallery4} alt="galarry1"/>
            </div>
        </div>
    );
}
export default Gallery;