
function botaoNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calc.visor.value = '';
    }
    document.calc.visor.value = document.calc.visor.value + num;
    gvisor = 1;
 }

 function botaoLimpar() {
    document.calc.visor.value = '';
    delete gvalor;
    delete gfuncao;
    delete gvisor;
 }

 function botaoLimpar2() {
    document.calc.visor.value = '';
    delete gvalor;
    delete gfuncao;
    delete gvisor;
 }

 function calcFuncao(funcao, valor1, valor2) {
    if (funcao == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (funcao == "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (funcao == "multiplicar") {
             var valor = valor1 * valor2;
            } else {
                if (funcao == "dividir") {
                    var valor = valor1 / valor2;
                } else {
                    if (funcao == "porcentagem") {
                        var valor = valor;
                    }
                }
            }
       }
    }
 
    return(valor);
 }

 function calcParse(funcao) {
    var valor = document.calc.visor.value;
    delete gvisor;
 
    if (typeof gfuncao != 'undefined' && funcao == 'resultado') {
       gvalor = calcFuncao(gfuncao, gvalor, valor);
       document.calc.visor.value = gvalor;
       delete funcao;
       delete gvalor;
       return(0);
    }
 
    if (typeof gvalor != 'undefined') {
       gvalor = calcFuncao(gfuncao, gvalor, valor);
       gfuncao = funcao;
       document.calc.visor.value = gvalor;
    } else {
       gvalor = valor;
       gfuncao = funcao;
    }
 
 }