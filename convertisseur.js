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