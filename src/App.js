import './App.css';
import { infoAboutScroll } from './JS/scripts';
import Main from './Main/Main';

function App() {
  // const infoAboutScroll = (e) => {
  //     if (e.target.scrollTop >= 100) {
  //       let navbar = document.body.querySelector('.navbar__ul');
  //       navbar.classList.add('navbar__ul__hidden');
  //     }
  //   if (e.target.scrollTop < 100) {
  //     let navbar = document.body.querySelector('.navbar__ul');
  //     navbar.classList.remove('navbar__ul__hidden');
  //   }
  // }
  return (
    <div className="App" onScroll={(e) => {infoAboutScroll(e)}}>
        <Main />
    </div>
  );
}

export default App;
