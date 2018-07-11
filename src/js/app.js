
let facebook = document.getElementById('login-facebook');
let gmail = document.getElementById('login-gmail');
//...............AUTENTICAR POR FACEBOOK .....................
facebook.addEventListener('click', event => {
	/* console.log ('hola');
	alert('hOLA'); */
	var provider = new firebase.auth.FacebookAuthProvider();
	//Obtener los datos de mi perfil como nombre, correo, apellido
	provider.addScope('public_profile');
	//Todos los mensajes a español peru,
	firebase.auth().languageCode = 'es_PE';

	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		// ...
	}).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});
});

//...............AUTENTICAR POR GMAIL .....................

gmail.addEventListener('click', event => {
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	firebase.auth().languageCode = 'es';
	firebase.auth().signInWithPopup(provider).then(function(result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		console.log (user)
		// ...
	  }).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	  });
	

});

btnSignUp.addEventListener('click', e => {
	document.getElementById('section-register-user').style.display = 'block';
	document.getElementById('section-login').style.display = 'none';

});




