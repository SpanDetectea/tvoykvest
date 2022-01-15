import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useState } from 'react';
// import Navbar from './Header/Navbar/Navbar';

function App() {
  const [scroll, setscroll] = useState(false)
  const infoAboutScroll = (e) => {
    // console.log(e);
    // console.log('work')
    // if (!scroll) {
      if (e.target.scrollTop >= 100) {
        setscroll(true);
        let navbar = document.body.querySelector('.wrapper__navbar');
        navbar.classList.add('navbar__hidden');
        let down_menu = document.body.querySelector('.down__menu');
        down_menu.classList.remove('down__menu__hidden')
        // let navbar = document.body.querySelector('.navbar__ul');
        // navbar.classList.add('navbar__ul__hidden');
      }
    // }
    if (e.target.scrollTop < 100) {
      // console.log('true');
      setscroll(false);
      // let navbar = document.body.querySelector('.navbar__ul');
      //   navbar.classList.remove('navbar__ul__hidden');
      let navbar = document.body.querySelector('.wrapper__navbar');
      navbar.classList.remove('navbar__hidden');
      let down_menu = document.body.querySelector('.down__menu');
      down_menu.classList.add('down__menu__hidden')
    }
  }
  return (
    <div className="App" onScroll={infoAboutScroll}>
      <Header />
      <div className='wrapper__after__header'>
        {/* <Navbar /> */}
        <Main />
      </div>
    </div>
  );
}

export default App;
