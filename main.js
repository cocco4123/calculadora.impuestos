pedido = prompt("que vas a llevar")

if(pedido === "alicate" || "alicante"){
    precio = 1000
    alert("tenes que pagar" + precio)
}
else if( pedido === "destornillador" || "tiki tiki"){
    prompt("")
}
else if( pedido === "tornillo" || "clavo a rosca"){
    precio  = 0.5
    alert("tenes que pagar" + precio)
}
else if( pedido === "arandela" || "cuchuflete"){
    precio  = 0.75
    alert("tenes que pagar" + precio)
}
else if( pedido === "tarugo" || "pituto"){
    precio  = 1.1
    alert("tenes que pagar" + precio)
}   