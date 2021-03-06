import './Reset.css';
import './App.css';
import heart from './heart.webp';

export default function App() {
  return (
    <div className="App">

      <h1>Calculadora Reactiva ⚛️ </h1>

      <textarea readOnly id="resultado"></textarea>


      <div className="table">

        <div className="row">
          {btn("C", 'orangered')}
          {btn("/")}
          {btn("X")}
          {btn("DEL", 'lightsteelblue')}
        </div>

        <div className="row">
          {btn(7)}
          {btn(8)}
          {btn(9)}
          {btn("-")}
        </div>

        <div className="row">
          {btn(4)}
          {btn(5)}
          {btn(6)}
          {btn("+")}
        </div>

        <div className="row">
          {btn(1)}
          {btn(2)}
          {btn(3)}
          {btn("=")}
        </div>
        <div className="row">
          <div className="cell"></div>
          {btn(0)}
          {btn('.')}
        </div>

      </div>
      <p id='footer'>
        Made with <img id='heart' src={heart} alt="Logo" /> by Emmanuel Esquivel Pardo
      </p>
    </div>
  );
}

function btn(caracter, backround) {

  return (
    <div className="cell">
      <button style={{ background: backround }}
        onClick={() => { dameLetra(caracter) }}>
        {caracter}
      </button>
    </div>
  );
}

function calcular(a, operador, b) {
  switch (operador) {
    case '+':
      c = a + b;
      c = c.toFixed(4);
      pintaEnPantalla(c);
      a = 0;
      b = 0;
      c = 0;
      operador = '';
      break;

    case '-':
      c = a - b;
      c = c.toFixed(4);
      pintaEnPantalla(c);
      a = 0;
      b = 0;
      c = 0
      operador = '';
      break;

    case 'X':
      c = a * b;
      c = c.toFixed(4);
      pintaEnPantalla(c);
      a = 0;
      b = 0;
      c = 0
      operador = '';
      break;

    case '/':
      c = a / b;
      c = c.toFixed(4);
      pintaEnPantalla(c);
      a = 0;
      b = 0;
      c = 0
      operador = '';
      break;


    default:
      break;
  }
}

let operador = '';
let a = 0;
let b = 0;
let c = 0;
function dameLetra(valor) {

  switch (valor) {
    case 'DEL':
      //Borrar de adelante hacia atrás uno a uno
      let ultimo = document.getElementById('resultado').innerHTML;
      ultimo = ultimo.substr(0, ultimo.length - 1);
      pintaEnPantalla(ultimo);
      break;
    case 'C':
      limpiar();
      a = 0;
      b = 0;
      operador = '';
      break;
    case '/':
      operador = '/';
      a = contenidoPantalla();
      limpiar();
      break;
    case 'X':
      operador = 'X';
      a = contenidoPantalla();
      limpiar();
      break;
    case '-':
      operador = '-';
      a = contenidoPantalla();
      limpiar();
      break;
    case '+':
      operador = '+';
      a = contenidoPantalla();
      limpiar();
      break;
    case '=':
      b = contenidoPantalla();
      limpiar();
      calcular(a, operador, b);
      break;
    default:
      document.getElementById('resultado').innerHTML += valor;
      break;
  }
}
//Limpia pantalla de resultado
function limpiar() {
  document.getElementById('resultado').innerHTML = '';
}

function contenidoPantalla() {
  let pantalla = parseFloat(document.getElementById('resultado').innerHTML);
  return pantalla;
}

function pintaEnPantalla(algo) {
  document.getElementById('resultado').innerHTML = algo;
}