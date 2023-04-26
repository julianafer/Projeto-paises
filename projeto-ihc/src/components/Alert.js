import { Button } from "@mui/material"

function Alert() {
    return (
        <div id="alert">
            <div id="inside-alert">
                <h3>Confirmar alterações</h3>
                <p>Certeza que deseja salvar as alterações?</p>
                <div id="buttons">
                    <Button onClick={() => {
                        hideAlert()
                        showConfirmation()
                        }} id="confirmar" variant="contained">Sim, confirmar</Button>
                    <Button onClick={() => hideAlert()} variant="outlined">Não, voltar</Button>
                </div>
            </div>
        </div>
    )
}

function hideAlert() {
    const ale = document.getElementById("alert")
    ale.style.opacity = '0'
    ale.style.zIndex = '-2'
}

function showConfirmation() {
    const con = document.getElementById("confirma")
    con.style.opacity = '100%'
    con.style.zIndex = '3'
}

export default Alert