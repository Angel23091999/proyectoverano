import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="login-form bg-light mt-4 p-4">
              <form action="" method="" class="row g-3">
                <h4 align="center">Bienvenido</h4>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Direccion de correo electronico</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Contraseña</label>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      {" "}
                      Recuerdame
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-dark float-end">
                    Acceso
                  </button>
                </div>
              </form>
              <hr class="mt-4" />
              <div class="col-12">
                <p class="text-center mb-0">
                  Aun no tienes cuenta?{" "}
                  <a class="nav-link">
                    <Link to="/Formulario">Registrate</Link>
                  </a>
                </p>
              </div>
              <p align="center" class="mt-5 mb-3 text-muted">&copy; 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
