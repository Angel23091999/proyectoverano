import React from "react";
import "./Salud.css";

function Salud() {
  return (
    <div>
      <h2 align="center">¿Como prevenir el aumento de peso?</h2>
      <hr></hr>
      <div class="noticia">
        <img class="derecha" src="/img/img1.jpg" width="45%" alt=""/>
        <aside align="justify">
          Si actualmente goza de un peso saludable, usted ya corre con una
          ventaja. Para mantener un peso saludable, vale la pena planificar un
          poco desde ahora. O quizás tiene sobrepeso pero aún no está listo para
          empezar a adelgazar. Si este es su caso prevenir un mayor aumento de
          peso es un objetivo valedero. Con el correr de los años, la
          composición del cuerpo cambia gradualmente, la proporción de los
          músculos disminuye y la de las grasas aumenta. Este cambio reduce el
          ritmo del metabolismo y facilita el aumento de peso. Además, algunas
          personas se vuelven menos activas al envejecer, lo que aumenta el
          riesgo de aumentar de peso. La buena noticia es que se puede prevenir
          el aumento de peso si se lleva un estilo de vida que incluya buenos
          hábitos de alimentación y actividad física diaria. Al evitar el
          aumento de peso, usted evita riesgos mayores de muchas enfermedades
          crónicas como enfermedades cardíacas, accidentes cerebrovasculares,
          diabetes tipo 2, presión arterial elevada, artrosis y algunos tipos de
          cáncer.
        </aside>
      </div>
      <hr></hr>
      <h2 align="center">
        Cómo elegir un plan de alimentación que prevenga el aumento de peso
      </h2>
      <div class="container">
        <p>
          Entonces, ¿cómo puede elegir un plan de alimentación saludable que le
          permita mantener su peso actual? El objetivo es que la elección de
          alimentos nutritivos y saludables se vuelva una costumbre. Para
          obtener más información, visite Alimentación saludable para un peso
          saludable.
        </p>
        <p>
          Si su objetivo es prevenir el aumento de peso, debe elegir alimentos
          que le proveen la cantidad de calorías adecuada para mantener su peso.
          Esta cantidad varía de persona a persona. Depende de muchos factores,
          como su altura, peso, edad, sexo y nivel de actividad. Para más
          información, consulte Cómo balancear las calorías.
        </p>
      </div>
      <hr></hr>
      <h2 align="center">¡Manténgase activo!</h2>
      <div class="noticia1">
        <img class="derecha" src="/img/img2.jpg" width="15%" alt=""/>
        <p>
          Además de un plan de alimentación saludable, un estilo de vida activo
          también le ayudará a mantener su peso. Al añadir más actividad física
          a su rutina diaria, usted aumentará la cantidad de calorías que quema
          su cuerpo. Esto le dará más probabilidades de mantener su peso
        </p>
        <p>
          Si bien la actividad física es parte integral del control de su peso,
          es también una parte vital de su salud en general. La actividad física
          regular puede reducir el riesgo de varias enfermedades crónicas y
          ayudar a que su cuerpo se mantenga fuerte y saludable. Para obtener
          más información sobre cómo la actividad física contribuye a mantener
          un peso saludable, visite Actividad física y peso saludable.
        </p>
      </div>
      <div className="noticia2">
        <h2 align="center">Autovigilancia</h2>
        <p>
          Es posible que le ayude pesarse en forma habitual. Si nota que está
          comenzando a subir de peso, tómese el tiempo necesario para examinar
          su estilo de vida. Con estas estrategias, aumenta las probabilidades
          de darse cuenta de pequeños aumentos más rápidamente.
        </p>
        <img
          class="derecha1"
          src="/img/img3.jpg"
          width="30%"
          alt=""
        />
        <p>Hágase estas preguntas:</p>
        <ul>
          <li>¿Ha cambiado mi nivel de actividad?</li>
          <li>
            ¿Estoy comiendo más de lo usual? Puede ayudarle llevar anotaciones
            en un diario de comidas por unos pocos días para tener más
            consciencia de lo que elige para comer.
          </li>
        </ul>
        <p>
          Si se hace estas preguntas y se da cuenta de que su nivel de actividad
          ha bajado o que no ha elegido bien las comidas, hágase el compromiso
          de volver a intentarlo. Fíjese unos objetivos razonables para aumentar
          su actividad física y elegir mejor las comidas.
        </p>
      </div>
    </div>
  );
}

export default Salud;
