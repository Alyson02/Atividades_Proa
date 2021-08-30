idadeCachorro = parseFloat(prompt("Digite a idade do cachorro:"))

if(idadeCachorro < 0){
    document.write("Seu cachorro ainda não existe, bro!");
}else{
    document.write("Seu cachorro tem aproximadamente: " + (idadeCachorro * 7) + " anos comparado a idade de humanos");
}