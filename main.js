pedido = prompt("que vas a llevar")

if(pedido === "alicate" || "alicante"){
    precio = 1000
    
}
else if( pedido === "destornillador" || "tiki tiki"){
    tipo = prompt("que tipo de destornillador")
    if(tipo === "plano" || "pala"){
        precio = 1000
    }
    else if (tipo === "philips" || "estrella"){
        precio = 1500
    }
}
else if( pedido === "tornillo" || "clavo a rosca"){
    precio  = 0.5

}
else if( pedido === "arandela" || "cuchuflete"){
    precio  = 0.75

}
else if( pedido === "tarugo" || "pituto"){
    precio  = 1.1

}   
    alert("tenes que pagar" + precio)
