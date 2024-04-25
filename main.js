
const listaCompra = [];

let total = 0;


function compraVerdu() {
    
    const frutYVerdu = parseFloat(prompt("ELIJA ALGUNA DE NUESTRAS FRUTAS O VERDURAS : \n 1) Lechuga precio x kg: 700 \n 2) Papa precio x kg: 1200\n 3) Uva precio x kg: 800\n 4) Pera precio x kg: 1150"));
    let cantidad = parseInt(prompt("Ingresa los kg a comprar del producto"));
    let precioCompra = cantidad;

    if (isNaN(frutYVerdu) || frutYVerdu < 0) {
        
        alert("Ingreso invalido");

        compraVerdu();
    } else {
        
        switch (frutYVerdu) {
            case 1:
                precioCompra = cantidad * 700;
                total += precioCompra
                break;
            case 2:
                precioCompra = cantidad * 1200;
                total += precioCompra
                break;
            case 3:
                precioCompra = cantidad * 800;
                total += precioCompra
                break;
            case 4:
                precioCompra = cantidad * 1150;
                total += precioCompra
                break;
            default:
                alert("Opcion Incorrecta, SI DESEA SALIR PULSE EL N° 4");
                
        }
    
    };
    
    
    const producto = {
        nombre: "",
        precio: precioCompra,
        cantidad: cantidad,

    };

    
    switch (frutYVerdu) {
        case 1:
            producto.nombre = "Lechuga";
            break;
        case 2:
            producto.nombre = "Papa";
            break;
        case 3:
            producto.nombre = "Uva";
            break;
        case 4:
            producto.nombre = "Pera";
            break;
        default:
            producto.nombre = "Item Invalido";
            break;
    };

    listaCompra.push(producto);
    alert(`Producto agregado OK: \n ${producto.nombre} \n Cantidad: ${producto.cantidad} \n Total a pagar: $${producto.precio}`);
}


function mostrarCompra() {

   let precios = {};

for (let i = 0; i < listaCompra.length; i++) {
        let producto = listaCompra[i]
        
    if (precios[producto.nombre]) {

            precios[producto.nombre] = producto.precio;
    } else {
            precios[producto.nombre] = producto.precio;
    }
}
    


    let mensaje = "Sus frutas y verduras son:\n";
    for (let nombre in precios) {
        let precioTotal = precios[nombre];
        mensaje += nombre + ": $ " + precioTotal + "\n";
        
    }
    mensaje += "\nPrecio total: $ " + total;
    alert(mensaje);
    
}

function montoAbonar() {
   
    alert(`El monto a abonar es de $${total}`);
     
    
}



function abrirSistema() {
    let eleccion = parseInt(prompt("Elija la opción que desea realizar:\n 1) Comprar Producto\n 2) Ver Listado de compras\n 3) Pagar \n 4) Para salir "));
   
    if (isNaN(eleccion)|| eleccion < 0) {
        
        alert("Ingreso invalido")

        abrirSistema();
    } else {

        while (eleccion !== 4 ) {
            switch (eleccion) {
                case 1:
                    compraVerdu();
                    eleccion = parseInt(prompt("Elija la opción que desea realizar:\n 1) Comprar Producto \n 2) Ver Listado de compras\n 3) Pagar \n 4) Para salir "));
                    break;
    
                case 2:
                    mostrarCompra();
                    eleccion = parseInt(prompt("Elija la opción que desea realizar: \n 1) Comprar Producto \n 2) Ver Listado de compras \n 3) Pagar \n 4) Para salir "));
                    break;
    
                case 3:
                    montoAbonar();
                    eleccion = parseInt(prompt("Elija la opción que desea realizar:\n 1) Comprar Producto\n 2) Ver Listado de compras\n 3) Pagar \n 4) Para salir "));
                    break;
                
                default:
                    alert("Opcion Inexsitente. PARA SALIR PRESIONE 4");
                    eleccion = parseInt(prompt("Sus opciones son:\n 1) Comprar Producto\n 2) Ver Listado de compras\n 3) Pagar \n 4) Para salir "));;
                    break;
            }
        }
    }

    
}
abrirSistema();
alert("Hasta Pronto")
