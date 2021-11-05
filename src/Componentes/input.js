import React from "react";
import{GrupoInput, 
    LeyendaError,
    Input,
    Label, 
    IconoValidacion} from './../Elementos/Formularios'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'



const ComponenteInput = ({tipo, label, placeholder,leyendaError, name, expresionRegular }) => {
    return (
    <div>
        <Label htmlFor={name}>{label}</Label>
        <GrupoInput>
            <Input type={tipo} placeholder={placeholder} id={name}/>
            <IconoValidacion icon = {faCheckCircle}/>
        </GrupoInput>
        <LeyendaError>{leyendaError}</LeyendaError>
        </div>

    );
}
export default ComponenteInput;