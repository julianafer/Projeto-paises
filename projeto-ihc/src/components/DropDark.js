import { Button, Switch } from "@mui/material"

function DropDark() {
    return (
        <div className="drop-dark">
            <span id="span-dark">
                <Switch color="secondary" /> Modo noturno
            </span>
            <Button variant="contained">Salvar alterações</Button>
        </div>
    )
}

export default DropDark