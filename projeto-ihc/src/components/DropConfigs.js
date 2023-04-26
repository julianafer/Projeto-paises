import { Button, Checkbox } from "@mui/material"

function DropConfigs() {
    return (
        <div className="drop-config">
            <div className="form">
                <span>
                    <Checkbox /> Ativar notificações
                </span>
                <span>
                    <Checkbox /> Receber atualizações por e-mail
                </span>
            </div>
            <Button onClick={() => showAlert()} variant="contained">Salvar alterações</Button>
        </div>
    )
}

function showAlert() {
    const ale = document.getElementById("alert")
    ale.style.opacity = '100%'
    ale.style.zIndex = '3'
}

export default DropConfigs