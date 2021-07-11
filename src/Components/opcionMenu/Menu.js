import React from "react";

function Menu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        IMApp
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Inicio <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Salud Alimenticia
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Ejercicio
            </a>
          </li>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">
              Iniciar Sesion
            </button>
            <button class="btn btn-primary" type="button">
              Registrarse
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
