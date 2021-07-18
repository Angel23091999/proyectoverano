import React from "react";

function Home() {
  return (
    <div>
      <div>
          <hr></hr>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/img/salud5.png"
                className="d-block mx-auto"
                alt="..."
                width="80%"
                height="100%"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/img/salud6.jpg"
                className="d-block mx-auto"
                alt="..."
                width="80%"
                height="70%"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/img/salud1.png"
                className="d-block mx-auto"
                alt="..."
                width="80%"
                height="70%"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <hr></hr>
      </div>
      <div align="center">
        <h2>Aplicacion para conocer el IMC de las personas</h2>
      </div>
      <hr></hr>
      <div>
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <img src="/img/peso.jpg" class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      Como evaluar su peso
                    </h4>
                    <p align="justify" className="card-text">
                      Si le está empezando a preocupar su peso, puede ser porque
                      ha notado que la ropa le queda diferente. O quizás sea
                      porque un profesional de atención médica le dijo que tiene
                      presión arterial elevada o colesterol alto y que el exceso
                      de peso puede ser un factor contribuyente. El primer paso
                      es evaluar si su peso actual es saludable o no.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <img
                    src="/img/peso1.jpg"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title" align="center">
                      Peso saludable
                    </h4>
                    <p className="card-text" align="justify">
                      La clave para lograr y mantener un peso saludable no está
                      relacionada con cambios en la alimentación a corto plazo.
                      Se trata en realidad de llevar un estilo de vida que
                      incluya alimentación saludable, actividad física regular y
                      equilibrio entre la cantidad de calorías consumidas y
                      utilizadas.
                      <br></br>
                      <br></br>
                      Tener su peso bajo control contribuye a tener una buena
                      salud ahora y en su futuro.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <img
                    src="/img/peso2.jpg"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">
                      ¿Como saber si mi peso es saludable?
                    </h4>
                    <p align="justify" className="card-text">
                      <h6>Indice de masa corporal del adulto o IMC</h6>
                      Un punto de partida para determinar si tiene un peso
                      saludable es calcular su “índice de masa corporal” (IMC).
                      Para la mayoría de las personas, el IMC es un indicador
                      confiable de grasa corporal. Se calcula de acuerdo a su
                      peso y estatura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
