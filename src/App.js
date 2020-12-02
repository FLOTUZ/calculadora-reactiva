import './App.css';

export default function App() {
  return (
    <div className="App">


      <textarea readOnly id="resultado"></textarea>


      <div className="table">

        <div className="row">
          {btn("C")}
          {btn("/")}
          {btn("X")}
          {btn("DEL")}
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
          {btn(0)}
        </div>

      </div>
    </div>
  );
}

function btn(caracter) {
  return (
    <div className="cell">
      <button onClick={() => { dameLetra(caracter) }}> {caracter}</button>
    </div>
  );
}

function calcular(a, operador, b) {
  switch (operador) {
    case '+':
      c = a + b;
      document.getElementById('resultado').innerHTML = c;
      a = 0;
      b = 0;
      c = 0;
      operador = '';
      break;

    case '-':
      c = a - b;
      document.getElementById('resultado').innerHTML = c;
      a = 0;
      b = 0;
      c = 0
      operador = '';
      break;

    case 'X':
      c = a * b;
      document.getElementById('resultado').innerHTML = c;
      a = 0;
      b = 0;
      c = 0
      operador = '';
      break;

    case '/':
      c = a / b;
      document.getElementById('resultado').innerHTML = c;
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
    case 'C':
      document.getElementById('resultado').innerHTML = '';
      a = 0;
      b = 0;
      operador = '';
      break;
    case '/':
      operador = '/';
      a = parseFloat(document.getElementById('resultado').innerHTML);
      document.getElementById('resultado').innerHTML = '';
      break;
    case 'X':
      operador = 'X';
      a = parseFloat(document.getElementById('resultado').innerHTML);
      document.getElementById('resultado').innerHTML = '';
      break;
    case 'DEL':
      //Borrar de adelante hacia atrás uno a uno
      let ultimo = document.getElementById('resultado').innerHTML;
      ultimo = ultimo.substr(0, ultimo.length - 1);
      document.getElementById('resultado').innerHTML = ultimo;
      break;
    case '-':
      operador = '-';
      a = parseFloat(document.getElementById('resultado').innerHTML);
      document.getElementById('resultado').innerHTML = '';
      break;
    case '+':
      operador = '+';
      a = parseFloat(document.getElementById('resultado').innerHTML);
      document.getElementById('resultado').innerHTML = '';
      break;
    case '=':
      b = parseFloat(document.getElementById('resultado').innerHTML);
      document.getElementById('resultado').innerHTML = '';
      calcular(a, operador, b);
      break;
    default:
      document.getElementById('resultado').innerHTML += valor;
      console.log(valor);
      break;
  }
}
