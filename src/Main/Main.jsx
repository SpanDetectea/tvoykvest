import React from "react";
import { Route, Routes } from "react-router";
import GameSelection from "../GameSelection/GameSelection.jsx";
import AboutGame from "./AboutGame/AboutGame.jsx";
import Birthday from "./Birthday/Birthday.jsx";
import Contact from "./Contact/Contact.jsx";
import Difficulty from "./Difficulty/Difficulty.jsx";
import Footer from "./Footer/Footer.jsx";
import Location from "./Location/Location.jsx";
import './Main.css';
import Reserv from "./Reserv/Reserv.jsx";
import Reservation from "./Reservation/Reservation.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import WrapperComponent from './WrapperComponent.jsx';

const Main = () => {
    return (
        <div className="wrapper__main" >
            
            <Routes>
                <Route path='/' element={<GameSelection />} />
                <Route path='/karantin' element={<WrapperComponent />} />
                <Route path='/reserv' element={<Reserv />} />
            </Routes>
        </div>
    );
}

export default Main;