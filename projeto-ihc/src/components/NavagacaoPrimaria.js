import { useState } from "react"
import NavegacaoSecundaria from "./NavegacaoSecundaria";

function NavegacaoPrimaria() {
    const [open, setOpen] = useState(false)

    return (
        <div className="primaria">
            <ul className="ul-primaria">
                <li className="li-primaria" id="africa" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("africa", open)
                    }}>África</li><span className="line">|</span>
                <li className="li-primaria" id="america" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("america", open)
                    }}>América</li><span className="line">|</span>
                <li className="li-primaria" id="asia" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("asia", open)
                    }}>Ásia</li><span className="line">|</span>
                <li className="li-primaria" id="europa" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("europa", open)
                    }}>Europa</li><span className="line">|</span>
                <li className="li-primaria" id="oceania" onClick={() => {
                    setOpen((prev) => !prev)
                    secundaria("oceania", open)
                    }}>Oceania</li>
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