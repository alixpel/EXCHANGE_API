fetch('https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest')
.then(function(body) {
  return body.json();
})
.then(function(json) {
  var span = document.getElementById("GBP");
  span.innerHTML = json.rates;
});

// ================ autre api ==================================
//fetch('https://v6.exchangerate-api.com/v6/8c2c99cb810468cd9a4ec1d6/latest/USD')
//key: 8c2c99cb810468cd9a4ec1d6
// ================ autre api ==================================



// ================ Convertisseur taux fictif : ================


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
