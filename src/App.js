import React from 'react';
import { Formulario, Label, GrupoInput, Input,LeyendaError,IconoValidacion } from './Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


const App = ()=> {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
          <Input type="text" placeholder="usuario" id="nombre"/>
          <IconoValidacion icon = {faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>
        <div>
        <Label>
            <input type = "checkbox" name="terminos" id="terminos"/>
            Acepto los Terminos y Condiciones
        </Label>
        </div>
          <div>
            <p>
            <FontAwesomeIcon icon = {faExclamationTriangle}/>
            <b>Error:</b>Por favor rellena el formulario conrrectamente.
            </p>
          </div>
          <div>
            <button type="submit">Enviar</button>
            <p>Formulario enviado exitosamente!</p>
          </div>

      </Formulario>
    </main>
  );

}


export default App;