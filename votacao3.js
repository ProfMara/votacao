//link do SDK do firebase
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

//cria a variável para guardar o número de votos do BRUXO
var numeroBruxo = 0;

//manda ler o que está no banco de dados para o BRUXO
database.ref("votoB").on("value", data=>{
    //guarda a quantidade de votos que o Bruxo tinha
    numeroBruxo =  data.val();
})

function votoBruxo(){
    //atualiza a quantidade de votos no banco de dados do bruxo
    database.ref("/").update({
        //muda o valor de votoB para o valor antigo + 1
        votoB: numeroBruxo + 1
    })    
    window.location = 'resultados.html';
}
//agora é só fazer o mesmo para o Fenômeno.