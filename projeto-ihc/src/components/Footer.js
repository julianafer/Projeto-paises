import { Button } from "@mui/material";
import { TbWorld } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { BsCash } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
    return (
        <div id="footer">
            <div id="botoes-footer">
                <Button className="fbottons" variant="outlined"><TbWorld className="icon-footer" /> Idioma • Português (Brasil)</Button>
                <Button className="fbottons" variant="outlined"><GrLocation className="icon-footer" /> Localização • Brasil</Button>
                <Button className="fbottons" variant="outlined"><BsCash className="icon-footer" /> Moeda • BRL</Button>
            </div>
            <span id="cp">ifpb - sistemas para internet <AiOutlineCopyright /> 2023</span>
        </div>
    )
}

export default Footer