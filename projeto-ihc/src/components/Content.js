import { Button, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { GiAirplaneDeparture } from "react-icons/gi";
import * as React from 'react';
import Info from './Info'

function Content() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [openInfo, setOpenInfo] = React.useState(false)

    return (
        <div>
            <span id="tip" onClick={() => setOpenInfo((prev) => !prev)} >i</span>
            {
                openInfo && <Info />
            }
            <div className="div-content">
                <div className="passagens">
                    <TextField id="outlined-basic1" label="Origem" variant="outlined" />
                    <GiAirplaneDeparture id="aviao" />
                    <TextField id="outlined-basic2" label="Destino" variant="outlined" />
                </div>
                <div id="drop-radio">
                    <FormControl className="drop-form">
                        <InputLabel id="demo-simple-select-label">Opções de viagem</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Opções de viagem"
                            onChange={handleChange}
                        >
                            <MenuItem>Só ida</MenuItem>
                            <MenuItem>Ida e volta</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="radio">
                    <FormLabel id="demo-row-radio-buttons-group-label">Aceita conexão:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                        <FormControlLabel value="male" control={<Radio />} label="Não" />
                    </RadioGroup>
                    </FormControl>
                </div>
                <Button id="comprar" variant="contained">Comprar passagem</Button>
            </div>
        </div>
    )
}

export default Content