import React, { useState } from "react";
//import ConexionApi from '../services/conexionAxios';
function Formulario() {
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
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title" align="center">
          Formulario de Registro de Usuario
        </h5>
        <h6 class="card-subtitle mb-2 text-muted" align="center">
          Inserte los datos
        </h6>
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Nombre(s)
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              Apellidos
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">
              Direccion
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">
              Edad
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-4">
            <label for="inputEmail3" class="form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div class="col-md-4">
            <label for="inputPassword3" class="form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
