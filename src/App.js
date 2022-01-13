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
    if (!scroll) {
      if (e.target.scrollTop >= 100) {
        setscroll(true);
        let navbar = document.body.querySelector('.navbar__ul');
        navbar.classList.add('navbar__ul__hidden');
      }
    }
    if (e.target.scrollTop < 100) {
      // console.log('true');
      setscroll(false);
      let navbar = document.body.querySelector('.navbar__ul');
        navbar.classList.remove('navbar__ul__hidden');
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
