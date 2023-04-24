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
            <Button variant="contained">Salvar alterações</Button>
        </div>
    )
}

export default DropConfigs