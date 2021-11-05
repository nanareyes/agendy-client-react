import React from 'react';
import { Formulario, 
  Label, 
    ContenedorBotonCentrado, 
  ContenedorTerminos, 
  Boton,
  MensajeExito,
  MensajeError,
} from './Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import  Input  from './Componentes/input';

const App = ()=> {
  return (
    <main>
      <Formulario action="">
        <Input
        tipo ="text"
          label="Usuario"
          placeholder ="sofia123"
          name ="usuario"
          leyendaError="El usuario tiene queser de 4 a 8 dígitos y solo  puede contener numeros, letras y guion bajo"
          expresionRegular=""
        />
        

        <ContenedorTerminos>
        <Label>
            <input type = "checkbox" name="terminos" id="terminos"/>
            Acepto los Terminos y Condiciones
        </Label>
        </ContenedorTerminos>
          { false&& <MensajeError>
            <p>
            <FontAwesomeIcon icon = {faExclamationTriangle}/>
            <b>Error:</b>Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>}
          <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );

}
export default App;