// function calculate() {
//     var nome = document.getElementById('input_nome').value;
//     var mensalidade = document.getElementById('input_mensalidade').value;
//     var tempo = document.getElementById('input_tempo').value;
//     alert("Nome:" + nome + "\n Mensalidade:" + mensalidade + "\n tempo:" + tempo);
// }

function limpar(){
    var nome = document.getElementById('input_nome').value;
    var mensalidade = parseFloat(document.getElementById('input_mensalidade').value);
    var tempo = parseInt(document.getElementById('input_tempo').value);
    var mont = 0;
    var taxa = 4.048;
	
	document.getElementById('input_nome').value = ""
	document.getElementById('input_mensalidade').value = "";
	document.getElementById('input_tempo').value = "";

    mont = parseFloat(mensalidade*Math.pow((1 + taxa), tempo))

    if (parseInt(tempo) == 1){
        tempo = '1 ano'
    }else{
        tempo = `${tempo} anos`
    }
	
	document.getElementById('body').style.backgroundImage="none";

    var container = document.querySelector("#conteudo")
    container.remove();
    main = document.getElementById("main")
    text = document.createElement('h1')
    text.setAttribute('id', 'conteudo1')
    text.innerHTML = `Olá ${nome} juntando R$ ${mensalidade} todo mês, você terá R$ ${mont.toFixed(2)} em ${tempo}.`;
    main.append(text)

    let button = document.createElement("input");
    button.value = "Simular novamente";
    button.setAttribute("type", "button");
    button.classList.add('botao');
	
    button.addEventListener("click", function(e){
        retry()
    });

    old_button = document.getElementById("btn_simular");
    old_button.remove();

    div = document.getElementById("sim")
    div.append(button)

    document.getElementById('body').style.backgroundImage="none";
}

function retry(){
    document.location.reload(false);
}
