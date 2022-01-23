import React from "react";
import Header from "../Header/Header";
import AboutGame from "./AboutGame/AboutGame";
import Birthday from "./Birthday/Birthday";
import Difficulty from "./Difficulty/Difficulty";
import Footer from "./Footer/Footer";
import Location from "./Location/Location";
import Reservation from "./Reservation/Reservation";
import Reviews from "./Reviews/Reviews";

const WrapperComponent = () => {
    return (
        <div>
            <Header />
            <Reservation />
            <AboutGame />
            {/* <Contact /> */}
            <Difficulty />
            <Birthday />
            <Location />
            <Reviews />
            <Footer />
        </div>
    );
}

export default WrapperComponent;