import slider1 from './../assets/images/slider1.jpg';
import slider2 from './../assets/images/slider2.jpg';
import slider3 from './../assets/images/slider3.jpg';
import slider4 from './../assets/images/slider4.jpg';
import slider5 from './../assets/images/slider5.jpg';
import slider6 from './../assets/images/slider6.jpg';
import slider7 from './../assets/images/slider7.jpg';

export const infoAboutScroll = (e) => {
    if (e.target.scrollTop >= 100) {
        let navbar = document.body.querySelector('.navbar__ul');
        navbar.classList.add('navbar__ul__hidden');
    }
    if (e.target.scrollTop < 100) {
        let navbar = document.body.querySelector('.navbar__ul');
        navbar.classList.remove('navbar__ul__hidden');
    }
}
export const photos = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7
]