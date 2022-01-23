import React, { useState } from "react";
import './Reviews.css';
import arrow_left from './../../assets/icons/arrow_left.png';
import arrow_right from './../../assets/icons/arrow_right.png';
import slider1 from './../../assets/images/slider1.jpg';
import slider2 from './../../assets/images/slider2.jpg';
import slider3 from './../../assets/images/slider3.jpg';
import slider4 from './../../assets/images/slider4.jpg';
import slider5 from './../../assets/images/slider5.jpg';
import slider6 from './../../assets/images/slider6.jpg';
import slider7 from './../../assets/images/slider7.jpg';
import { photos } from "../../JS/scripts";

const Reviews = () => {
    const [slider,setSlider] = useState(slider1)
    const [id, setId] = useState(0);
    const arrowRight = () => {
        if (id === 6) {
            setId(0);
            setSlider(photos[0]);
        } else {
            setSlider(photos[id+1]);
            setId(id+1);    
        }
    }
    const arrowLeft = () => {
        if (id === 0) {
            setId(6);
            setSlider(photos[6]);
        } else {
            setSlider(photos[id-1]);
            setId(id-1);    
        }
    }
    return (
        <div className="wrapper__reviews">
            <h1>Ваши отзывы</h1>
            <div className="wrapper__slider">
                <div className="button__left"><img src={arrow_left} alt="" className="img__arrow" onClick={arrowLeft}/></div>
                <div className="slider"><img className="img__slider" src={slider} alt="" onTouchEnd={(e) => {console.log(e)}} /></div>
                <div className="button__right "><img src={arrow_right} alt="" className="img__arrow" onClick={arrowRight}/></div>
            </div>
        </div>
    );
}

export default Reviews;