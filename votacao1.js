
const firebaseConfig = {
    apiKey: "AIzaSyA02KhAQUiLIXk-iYIsGViPBsPNqwdRMqo",
    authDomain: "votacao-85246.firebaseapp.com",
    databaseURL: "https://votacao-85246-default-rtdb.firebaseio.com",
    projectId: "votacao-85246",
    storageBucket: "votacao-85246.appspot.com",
    messagingSenderId: "893259716051",
    appId: "1:893259716051:web:8bb94e72458fcfa5c2cb26",
    measurementId: "G-0DP6V8D392"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var numeroDeVotosMessi = 0;
var numeroDeVotosCR7 = 0;


//manda ler o que está no banco de dados para o Messi



//manda ler o que está no banco de dados para o CR7


function votoCr7(){
    //atualiza a quantidade de votos no banco de dados do CR7


    window.location = 'votacao2.html';
}

function votoMessi(){
    //atualiza a quantidade de votos no banco de dados do Messi


    window.location = 'votacao2.html';
}