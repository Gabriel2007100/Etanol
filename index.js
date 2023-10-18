function calcular(){
    var valorEtanol = parseFloat(etanol.value);
    var valorGasolina = parseFloat(gasolina.value);

    var custo = (valorEtanol/valorGasolina);

    if (custo > 0.7){
        alert("Use gasolina");
    }

    if (custo < 0.7){
        alert("use etanol");
    }

    if (custo == 0.7){
        alert("Indiferente");
    }

}