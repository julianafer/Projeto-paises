import logo from '../img/planeta.png'
import CountrySelect from './CountrySelect'
import { MdNightlight, MdSettings } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import * as React from 'react';
import DropConfigs from './DropConfigs'
import { useState } from 'react';
import DropDark from './DropDark';
import DropUser from './DropUser';

function NavBar() {
    const [openConfig, setOpenConfig] = useState(false)
    const [openDark, setOpenDark] = useState(false)
    const [openUser, setOpenUser] = useState(false)

    return (
        <div className="navbar">
            <a href="#" className="logo">
                <img src={logo} id="logo-img"/>
                <h1 id="h1-logo">World Adventurer</h1>
            </a>
            <CountrySelect />
            <div className="servicos">
                <MdNightlight className="icons" onClick={() => setOpenDark((prev) => !prev)} />
                {
                    openDark && <DropDark />
                }
                <MdSettings className="icons" onClick={() => setOpenConfig((prev) => !prev)} />
                {
                    openConfig && <DropConfigs />
                }
                <FaUserEdit id="profile" className="icons" onClick={() => setOpenUser((prev) => !prev)} />
                {
                    openUser && <DropUser />
                }
            </div>
        </div>
    );
}

export default NavBar;