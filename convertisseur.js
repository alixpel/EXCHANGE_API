GET https:('//api.exchangeratesapi.io/latest HTTP/1.1')

{
  "base": "EUR",
  "date": "2018-04-08",
  "rates": {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
    ...
  }
}

// ========================================================================================


function convertirEnEuros() {
 	let montantlivres = document.querySelector('.champlivres').value;
 	let montanteuros = (montantlivres * 1.15);
 	return montanteuros;
}
document.querySelector('.champlivres').addEventListener('input', function() {
	let resultat = convertirEnEuros(); // /1.15
	document.querySelector('.champeuros').value = resultat;

});


function convertirEnLivres() {
 	let montanteuros = document.querySelector('.champeuros').value;
 	let montantlivres = (montanteuros / 1.15);
 	return montantlivres;
}
document.querySelector('.champeuros').addEventListener('input', function() {
	let resultat = convertirEnLivres(); // *1.15
	document.querySelector('.champlivres').value = resultat;

});
