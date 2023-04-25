import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { GiAirplaneDeparture } from "react-icons/gi";
import * as React from 'react';

function Content() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="div-content">
            <div className="passagens">
                <TextField id="outlined-basic1" label="Origem" variant="outlined" />
                <GiAirplaneDeparture id="aviao" />
                <TextField id="outlined-basic2" label="Destino" variant="outlined" />
            </div>
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
        </div>
    )
}

export default Content