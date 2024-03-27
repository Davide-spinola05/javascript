n1 = parseInt(prompt('Inserisci il primo numero'));
n2 = parseInt(prompt('inserisci il secondo numero'));
segno = prompt(
  'iserisci uno di questi segni per definire che operazione fare [+] [-] [/] [*] [**]'
);

if (Number.isNaN(n1) || Number.isNaN(n2)) {
  alert("uno dei due numeri non e' un numero");
} else {
  switch (segno) {
    case '+':
      const somma = function (a, b) {
        return a + b;
      };
      alert("il risultato della somma e': " + somma(n1, n2));
      break;
    case '-':
      const sottrazione = function (a, b) {
        return a - b;
      };
      alert("il risultato della sottrazione e': " + sottrazione(n1, n2));
      break;

    case '/':
      const divisione = function (a, b) {
        return a / b;
      };
      alert("il risultato della divisione e':" + divisione(n1, n2));
      break;

    case '*':
      const moltiplicazione = function (a, b) {
        return a * b;
      };
      alert("il risultato della moltiplicazione e':" + moltiplicazione(n1, n2));
      break;

    case '**':
      const potenza = function (a, b) {
        return a ** b;
      };
      alert("il risultato e':" + potenza(n1, n2));
      break;

    default:
      alert('segno inserito non corretto');
  }
}
