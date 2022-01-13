import React from "react";
import { Map, Placemark } from "react-yandex-maps";
import './Location.css';

const Location = () => {
    return (
        <div className="wrapper__location">
            <div className="location__header">
                Где Находится?
            </div>
            <div className="location__info">
                <div className="location__info__double">
                    <div>Адрес: улица Державина, 5</div>
                    <div>Телефонный номер: +7 (911) 412-03-26</div>
                    <div>Whatsapp: +7 (911) 412-03-26</div>
                    <div>vk: <a className="location__a" href="https://vk.com/tvoy_kvest">tvoy_kvest</a></div>
                    <div>instagram: <a className="location__a" href="https://www.instagram.com/tvoy_kvest/">tvoy_kvest</a></div>
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