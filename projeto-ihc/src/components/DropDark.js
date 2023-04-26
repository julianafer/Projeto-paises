import { Button, Switch } from "@mui/material"

function DropDark() {
    return (
        <div className="drop-dark">
            <span id="span-dark">
                <Switch color="secondary" /> Modo noturno
            </span>
            <Button onClick={() => showAlert()} variant="contained">Salvar alterações</Button>
        </div>
    )
}

function showAlert() {
    const ale = document.getElementById("alert")
    ale.style.opacity = '100%'
    ale.style.zIndex = '3'
}

export default DropDark