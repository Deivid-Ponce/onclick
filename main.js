let result = document.getElementById("result");


const alerta = () => {
    let valor = document.getElementById("1").value;
    let total = valor * 25000;
    let totalP = document.getElementById("p1");
   
    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)

    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta2 = () => {
    let valor = document.getElementById("2").value
    let total = valor * 45000
    let totalP = document.getElementById("p2");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta3 = () => {
    let valor = document.getElementById("3").value
    let total = valor * 45000
    let totalP = document.getElementById("p3")

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta4 = () => {
    let valor = document.getElementById("4").value
    let total = valor * 45000
    let totalP = document.getElementById("p4");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta5 = () => {
    let valor = document.getElementById("5").value
    let total = valor * 25000
    let totalP = document.getElementById("p5");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta6 = () => {
    let valor = document.getElementById("6").value
    let total = valor * 25000
    let totalP = document.getElementById("p6");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta7 = () => {
    let valor = document.getElementById("7").value
    let total = valor * 22000
    let totalP = document.getElementById("p7");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}
const alerta8 = () => {
    let valor = document.getElementById("8").value
    let total = valor * 25000
    let totalP = document.getElementById("p8");

    if (valor == 0) {
        alert("Introduce un numero valido a comprar")
    } else if (valor <= 10) {
        totalP.innerHTML = `El total a pagar es ${total} pesos`;
        result.innerHTML = `El total a pagar es ${total} pesos`;
        setTimeout(() => {
            alert(`Gracias por tu compra usted ha seleccionado ${valor} piezas por lo que el total a pagar sera de $ ${total} pesos`);
        }, 200)
    } else {
        alert("Numero muy grande para stock disponible")
    }
}

const borrar = () => {
    let valor = document.getElementById("1")
    let totalP = document.getElementById("p1");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;

}
const borrar2 = () => {
    let valor = document.getElementById("2")
    let totalP = document.getElementById("p2");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar3 = () => {
    let valor = document.getElementById("3")
    let totalP = document.getElementById("p3");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar4 = () => {
    let valor = document.getElementById("4")
    let totalP = document.getElementById("p4");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar5 = () => {
    let valor = document.getElementById("5")
    let totalP = document.getElementById("p5");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar6 = () => {
    let valor = document.getElementById("6")
    let totalP = document.getElementById("p6");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar7 = () => {
    let valor = document.getElementById("7")
    let totalP = document.getElementById("p7");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}
const borrar8 = () => {
    let valor = document.getElementById("8")
    let totalP = document.getElementById("p8");
    totalP.innerHTML = ""
    result.innerHTML = ""
    valor.value = 0;
}