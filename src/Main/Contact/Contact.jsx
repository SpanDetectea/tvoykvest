import React from "react";
import vkIcon from './../../assets/icons/vk.png';
import instagramIcon from './../../assets/icons/instagram.png';
import whatsappIcon from './../../assets/icons/whatsapp.png';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className="wrapper__contact">
                <a className="wrapper__contact__a" href = 'https://vk.me/tvoy_kvest'>
                    <img className="contact__icons" src={vkIcon} alt='VK'></img>
                </a>
                <a className="wrapper__contact__a" href = 'https://www.instagram.com/tvoy_kvest/'>
                    <img className="contact__icons" src={instagramIcon} alt='Instagram' ></img>
                </a>
                <a className="wrapper__contact__a" href = 'https://wa.me/79114120326?text=Здравствуйте,%20хотелось%20бы%20забронировать%20квест%20на%20следующую%20дату:'>
                    <img className="contact__icons" src={whatsappIcon} alt='Whatsup'></img>
                </a >
        </div>
    );
}

export default Contact;
