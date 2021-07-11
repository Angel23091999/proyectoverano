import React, { useState } from "react";
//import ConexionApi from '../services/conexionAxios';
function FormDatos() {
  const variablesInicio = {
    nombre: "",
    apellidos: "",
    direccion: "",
  };
  const [values, setValues] = useState(variablesInicio);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onClick = (e) => {
    e.preventDefault();
    //let suma=values.nombre+""+values.apellidos+""+values.direccion
    alert(
      "La suma es: " +
        values.nombre +
        " " +
        values.apellidos +
        " " +
        values.direccion
    );
    setValues(variablesInicio);
  };

  return (
    <div>
      <div class="card">
        <div className="card-body">
          <h5 className="card-title">Datos Personales</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Inserte sus datos personales
          </h6>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Nombre
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Inserte su nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="nombre"
              onChange={onChange}
              value={values.nombre}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Apellidos
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Inserte sus apellidos"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="apellidos"
              onChange={onChange}
              value={values.apellidos}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Direccion
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Inserte su direccion"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="direccion"
              onChange={onChange}
              value={values.direccion}
            />
          </div>

          <button type="button" class="btn btn-success" onClick={onClick}>
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormDatos;
