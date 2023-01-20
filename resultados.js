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

//cria a variável para guardar a quantidade de votos do BRUXO
var numeroBruxo = 0;

function carregou(){
  //programa para ler a quantidade de votos do bruxo do banco de dados
  database.ref("votoB").on("value", data=>{
      //guarda na variável o valor que leu
      numeroBruxo = data.val();
      //exibe na tela esse valor
      document.getElementById("idDoBruxo").innerHTML = numeroBruxo;
  })

  //agora, é só fazer o mesmo para os outros jogadores


}