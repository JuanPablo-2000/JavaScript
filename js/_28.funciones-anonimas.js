//Funciones Anónimas Autoejecutables

(function () {
	console.log('Mi primer función autoejecutable');
})();

(function (d, w, c) {
	console.log('Mi segunda función autoejecutable');
	console.log(d);
	console.log(w);
	c.log('Este es un console.log')
})(document, window, console);

//Formas de escribir las funciónes Anónimas
//Autoejecutables
//Clásicas
(function () {
	console.log('versión Clásicas');
})();

//La Crockford (JavaScript The God Parts)
((function () {
	console.log('versión Crockford');
})());

//Unaria
+function () {
	console.log('versión Unaria');
}();

//Facebook
!function () {
	console.log('versión Facebook');
}();


