import { Button, TextField } from '@mui/material';
import user from '../img/user.jpg'
import { AiFillCamera } from "react-icons/ai";

function DropUser() {
    return (
        <div className="drop-user">
            <div>
                <img src={user} id="user-img" />
                <span id="span-user">Mudar foto de perfil <AiFillCamera /></span>
            </div>
            <TextField id="standard-basic" label="Mudar nome de usuário" variant="standard" />
            <TextField
                id="standard-password-input"
                label="Mudar senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />
            <Button variant="contained">Salvar alterações</Button>
        </div>
    )
}

export default DropUser