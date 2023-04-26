function Confirmacao() {
    return (
        <div id="confirma">
            <span id="aviso">Alterações salvas</span>
            <span onClick={() => hideConfirmation()} id="x">X</span>
        </div>
    )
}

function hideConfirmation() {
    const con = document.getElementById("confirma")
    con.style.opacity = '0'
    con.style.zIndex = '-2'
}

export default Confirmacao