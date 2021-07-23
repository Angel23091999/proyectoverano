import React, { Component } from "react";
import "./funcion2.css";

function MessageIMC(result) {
  if (result < 18.5)
    return (
      "Su IMC es " +
      parseFloat(result).toFixed(2) +
      ", lo que indica que su peso está en la categoría de Bajo peso para adultos de su misma estatura."
    );
  else if (result >= 18.5 && result <= 24.9) {
    return (
      "Su IMC es " +
      result +
      ", lo que indica que su peso está en la categoría Normal para adultos de su misma estatura."
    );
  } else if (result > 24.9 && result <= 29.9) {
    return (
      "Su IMC es " +
      result +
      ", lo que indica que su peso está en la categoría de Sobrepeso para adultos de su misma estatura."
    );
  } else if (result > 29.9) {
    return (
      "Su IMC es " +
      result +
      ", lo que indica que su peso está en la categoría de Obeso para adultos de su misma estatura."
    );
  }
}

class Funcion2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masa: 0,
      altura: 0,
      valor: "",
    };

    this.handleAltura = this.handleAltura.bind(this);
    this.handleMasa = this.handleMasa.bind(this);
    this.clickIMC = this.clickIMC.bind(this);
  }

  handleMasa(event) {
    this.setState({ masa: event.target.value });
  }

  handleAltura(event) {
    this.setState({ altura: event.target.value });
  }

  clickIMC = (e) => {
    e.preventDefault();
    const { masa, altura } = this.state;
    let valor = masa / (altura * altura);
    this.setState({ valor });
  };

  render() {
    const valor = this.state.valor;
    const result = Number.isNaN(parseFloat(valor)) ? "0" : valor;
    const messageIMC = MessageIMC(result);

    return (
      <div className="col-md-8">
        <div className="card">
          <div class="card-body">
            <h5 class="card-title">Calculadora del IMC para adultos</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Inserte los siguientes datos
            </h6>
            <form class="row g-3">
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">
                  Altura: Metros
                </label>
                <input
                  onChange={this.handleAltura}
                  id="altura"
                  placeholder="Altura"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  Peso: Kilogramos
                </label>
                <input
                  onChange={this.handleMasa}
                  type="text"
                  class="form-control"
                  id="validationDefault02"
                  placeholder="Peso"
                  required
                ></input>
              </div>
              <div class="col-12">
                <button onClick={this.clickIMC} class="btn btn-primary">
                  Calcular
                </button>
                <hr></hr>
                {result > 0 && <p>{messageIMC}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Funcion2;
