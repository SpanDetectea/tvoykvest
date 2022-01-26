import React from "react";
import { Element } from "react-scroll";
import { Map, Placemark } from "react-yandex-maps";
import Contact from "../Contact/Contact";
import './Location.css';

const Location = () => {
    return (
        <div className="wrapper__location">
            <div className="location__header">
                <Element name="scrolllocation">
                    Где Находится?
                </Element>
            </div>
            <div className="location__info">
                <div className="location__info__double">
                    <div>Адрес: улица Державина, 5</div>
                    <div>Телефонный номер: <a href='tel:79114120326' className="location__phone__number">+7 (911) 412-03-26</a></div>
                    {/* <div><Contact /></div> */}
                </div>
                <div className="wrapper__location__map">
                    <Map className="wrapper__map" defaultState={{ center: [61.779198, 34.403481], zoom: 16, controls: ['zoomControl', 'fullscreenControl'] }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}>
                        <Placemark modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} defaultGeometry={[61.778879, 34.403835]} properties={{
                            balloonContentBody:
                                'Вход с торца здания',
                            hintContent:
                                'Вход с торца здания'
                        }} />
                    </Map>
                </div>
            </div>
        </div>
    );
}

export default Location;