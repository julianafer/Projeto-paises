import { useState } from "react"
import NavegacaoSecundaria from "./NavegacaoSecundaria";
import { IoIosArrowDown } from "react-icons/io";

function NavegacaoPrimaria() {
    const [open, setOpen] = useState(false)

    return (
        <div className="primaria">
            <ul className="ul-primaria">
                <li className="li-primaria" id="africa" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("africa", open)
                    }}>África <IoIosArrowDown className="arrow" /></li><span className="line">|</span>
                <li className="li-primaria" id="america" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("america", open)
                    }}>América <IoIosArrowDown className="arrow" /></li><span className="line">|</span>
                <li className="li-primaria" id="asia" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("asia", open)
                    }}>Ásia <IoIosArrowDown className="arrow" /></li><span className="line">|</span>
                <li className="li-primaria" id="europa" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("europa", open)
                    }}>Europa <IoIosArrowDown className="arrow" /></li><span className="line">|</span>
                <li className="li-primaria" id="oceania" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("oceania", open)
                    }}>Oceania <IoIosArrowDown className="arrow" /></li>
            </ul>
            {
                open && <NavegacaoSecundaria />
            }
        </div>
    );
}

function secundaria(id, open) {
    const self = document.getElementById(id)
    if (!open) {
        self.style.background = "#46295a"
        self.style.color = "white"
    } else {
        self.style.background = "#e0b0ff"
        self.style.color = "#46295a"
    }
}

export default NavegacaoPrimaria;