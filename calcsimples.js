function calcular (operacao){
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var somar;
    var subtrair;
    var multi;
    var div;
    var result= document.getElementsByClassName("result");

    if (document.getElementsByClassName("operacao") == somar){
        return result = parseInt(valor1) + parseInt(valor2);
    }else {
        if (document.getElementsByClassName("operacao") == subtrair){
            return result = valor1 - valor2;
        }else {
            if (document.getElementsByClassName("operacao") == multi){
                return result = valor1 * valor2;
            }else {
                if (document.getElementsByClassName("operacao") == div){
                    return result = valor1/valor2;
                }
            }
        }
    }
    document.getElementById("resulta").innerHTML = result.value;
    console.log(result);
}