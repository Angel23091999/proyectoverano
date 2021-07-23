import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Logaut from "../Logaut/Logaut";
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'

function Menu() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <p>IMApp</p>
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
              <button type="button" class="btn btn-danger">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </button>
              {isAuthenticated ? (
                <>
                  <button type="button" class="btn btn-danger">
                    <Link class="nav-link active" to="/Salud">
                      Salud Alimenticia
                    </Link>
                  </button>
                  <li type="button" class="btn btn-danger">
                    <Link class="nav-link active" to="/Ejercicio">
                      Ejercicio
                    </Link>
                  </li>
                  <li type="button" class="btn btn-danger">
                    <Link class="nav-link active" to="/Funcion">
                      Calcular IMC
                    </Link>
                  </li>
                  <li type="button" class="btn btn-danger">
                    <p>
                      <Logaut />
                    </p>
                  </li>
                </>
              ) : (
                <div class="position-relative">
                  <li type="button" class="btn btn-danger">
                    <p>
                      <Login />
                    </p>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Menu;
