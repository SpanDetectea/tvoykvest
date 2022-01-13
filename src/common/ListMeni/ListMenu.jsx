import React from "react";
import { NavLink } from "react-router-dom";
import './ListMenu.css';

const ListMenu = (props) => {
    let path = `/${props.path}`;
    // console.log(props.icon);
    const addClass = props => {
        // console.log('da');
        let wrapper = document.querySelector('.wrapper__reservation');
        wrapper.classList.remove('wrapper__hidden');
    }
    return (
        <li>
            {path == '/reservation' ? <NavLink className='' to = {path} onClick={addClass}>{props.text}</NavLink> :<NavLink className='' to = {path} >{props.text}</NavLink>}
        </li>
    );
}

export default ListMenu;