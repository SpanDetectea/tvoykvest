import React from "react";
import { Route, Routes } from "react-router";
import AboutGame from "./AboutGame/AboutGame.jsx";
import Birthday from "./Birthday/Birthday.jsx";
import Contact from "./Contact/Contact.jsx";
import Difficulty from "./Difficulty/Difficulty.jsx";
import Location from "./Location/Location.jsx";
import './Main.css';
import Reservation from "./Reservation/Reservation.jsx";
import Reviews from "./Reviews/Reviews.jsx";

const Main = () => {
    return (
        <div className="wrapper__main" >
            <Reservation />
            <AboutGame />
            {/* <Contact /> */}
            <Difficulty />
            <Birthday />
            <Location />
            <Reviews />
        </div>
    );
}

export default Main;