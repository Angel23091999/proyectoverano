import React from 'react';
import {Link } from "react-router-dom";

function Menu() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">
              IMApp
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="/Ejercicio">Salud Alimenticia</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="/Ejercicio">Ejercicio</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="/Formulario">Registro</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="/Login">Entrar</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}
export default Menu;
