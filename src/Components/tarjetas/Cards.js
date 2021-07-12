import React from "react";

function Cards() {
  return (
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
                    de peso puede ser un factor contribuyente. El primer paso es
                    evaluar si su peso actual es saludable o no.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <img src="/img/peso1.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h4 className="card-title" align="center">
                    Peso saludable
                  </h4>
                  <p className="card-text" align="justify">
                    La clave para lograr y mantener un peso saludable no está
                    relacionada con cambios en la alimentación a corto plazo. Se
                    trata en realidad de llevar un estilo de vida que incluya
                    alimentación saludable, actividad física regular y
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
                <img src="/img/peso2.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h4 className="card-title">
                    ¿Como saber si mi peso es saludable?
                  </h4>
                  <p align="justify" className="card-text">
                    <h6>Indice de masa corporal del adulto o IMC</h6>
                    Un punto de partida para determinar si tiene un peso
                    saludable es calcular su “índice de masa corporal” (IMC).
                    Para la mayoría de las personas, el IMC es un indicador
                    confiable de grasa corporal. Se calcula de acuerdo a su peso
                    y estatura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
