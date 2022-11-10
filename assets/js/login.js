function logar(){
    var nomes = document.getElementById('nomes').value;
    var senha = document.getElementById('senha').value;

console.log(nomes)
console.log(senha)

if (nomes=="admin" && senha=="admin"){
    window.location.href="http://localhost/ProjetoIntegrador/PJI_II/Public/assets/Acesso-restrito/dashboard.html";
}else{
    alert("login ou senha incorretos")
};

}