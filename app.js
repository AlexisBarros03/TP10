$(document).ready(function(){
    $("#colorTabla").click(function() {
        var colorFila = "#f1e875";
        $("#colorTabla").css("background-color", `${colorFila}`);
    })
    $("#colorTabla2").click(function() {
        var colorFila = "#f17fa1";
        $("#colorTabla2").css("background-color", `${colorFila}`);
    })
    $("#ocultarLista1").click(function() {
        $("#ocultarLista1").hide();
    })
    $("#ocultarLista2").click(function() {
        $("#ocultarLista2").hide();
    })
    $("#ocultarLista3").click(function() {
        $("#ocultarLista3").hide();
    })
    $("#ocultarLista4").click(function() {
        $("#ocultarLista4").hide();
    })
    $("#color1").click(function() {
        $("#color1").css("background-color", "#975a39");
    })
    $("#color2").click(function() {
        $("#color2").css("background-color", "#b3ff87");
    })
    $("#color3").click(function() {
        $("#color3").css("background-color", "#81d0ff");
    })
    $("#strong1").click(function() {
        $("#strong1").remove()
    })
    $("#strong2").click(function() {
        $("#strong2").remove()
    })
    $("#strong3").click(function() {
        $("#strong3").remove()
    })
    $("#strong4").click(function() {
        $("#strong4").remove()
    })
    $("#strong4").click(function() {
        $("#strong4").remove()
    })
    $("#strong5").click(function() {
        $("#strong5").remove()
    })
    $("#strong6").click(function() {
        $("#strong6").remove()
    })
    $("#strong7").click(function() {
        $("#strong7").remove()
    })
    $("#strong8").click(function() {
        $("#strong8").remove()
    })
})

function arrayNumAleatorios1() {
    var arr = [];
    for (var i = 0; i < 5; i++) 
    {
        arr.push(Math.floor(Math.random() * 100));
    }
    arr.sort(function(a, b) {return a - b});
    for (var i = 0; i < arr.length; i++)
    {
        var liNumeros = `<li> ${arr[i]} </li>`;
        var lista = document.getElementById('lista-numeros');
        lista.innerHTML += liNumeros;
    }
}

function mostrarArray2WHILE() {
    var arr = [1, 2, 3, 4, 5];
    var i = 0;
    while (arr.length > i) 
    {
        var liNumeros = `<li> ${arr[i]} </li>`;
        var lista = document.getElementById('lista-numeros-WHILE');
        lista.innerHTML += liNumeros;
        i++;
    }
}

function mostrarArray2FOR() {
    var arr = [1, 2, 3, 4, 5];

    for (var i = 0; i < arr.length; i++)
    {
        var liNumeros = `<li> ${arr[i]} </li>`;
        var lista = document.getElementById('lista-numeros-FOR');
        lista.innerHTML += liNumeros;
    }
}

function mostrarArray2FOREACH() {
    var arr = [1, 2, 3, 4, 5];

    arr.forEach(mostrarElementos);
 
    function mostrarElementos(i) {
        var liNumeros = `<li> ${i} </li>`
        var lista = document.getElementById('lista-numeros-FOREACH');
        lista.innerHTML += liNumeros;
    }
}

function mostrarArray2SUMADOS() {
    var arr = [1, 2, 3, 4, 5];

    for (var i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] + 1;
        var liNumeros = `<li> ${arr[i]} </li>`
        lista = document.getElementById('lista-numeros-SUMADOS');
        lista.innerHTML += liNumeros;
    }

    var arrCopiado = [...arr];
    var acumulador = 0;
    var promedio;
    for (var i = 0; i < arrCopiado.length; i++)
    {
        acumulador = acumulador + arrCopiado[i];
    }
    promedio = acumulador / arrCopiado.length;
    document.getElementById('promedio').innerHTML = `El promedio de la suma de todos los números del array es de: <b>${promedio}</b>`;
}

function arrayElevadoAlCuadrado3() {
    var arr = [3, 5, 9, 2, 10];
    for (var i = 0; i < 5; i++) 
    {
        arr[i] = arr[i] * arr[i];
        var liNumeros = `<li> ${arr[i]} </li>`
        lista = document.getElementById('arrayAlCuadrado');
        lista.innerHTML += liNumeros;
    }
}

function arraySumaPositivos4() {
    var arr = [1, -4, 12, 0, -3, 29, -150];
    var acumulador = 0;

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0) 
        {
            acumulador = acumulador + arr[i];
        }
    }
    document.getElementById('arraySumaPositivos').innerHTML = `La suma de los números positivos del array es: <b>${acumulador}</b>`;
}

function arrayNombres5() {
    var arr = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
    var arrInicialesNombres = [];
    var arrNombresMayusculas = [];
    
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].length >= 6)
        {
            console.log(arr[i]);
        }
    }
    console.log("");
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].charAt(0).toUpperCase() === 'M')
        {
            console.log(`Los nombres que empiezan con la letra "M" son: ${arr[i]}`);
        }
        arrInicialesNombres.push(arr[i].charAt(0));
        arrNombresMayusculas.push(arr[i].toUpperCase());
    }
    console.log("");
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].charAt(0) != 'J')
        {
            console.log(`El nombre ${arr[i]} no empieza con la letra "J"`);
        }
    }
    console.log("");
    console.log(arr.sort());
    console.log(arrInicialesNombres);
    console.log(arrNombresMayusculas);
}

function arrayColores6() {
    var arr = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    var colorUsuario = prompt('Ingrese el color');

    for (var i = 0; i < arr.length; i++)
    {
        arr[i].toUpperCase();
        colorUsuario.toUpperCase();
        if(arr[i] === colorUsuario)
        {
            alert('El color se encuentra en el array');
        }
        else {
            alert('El color no se encuentra en el array');
        }
    }
}

function arrayPares7() {
    var numeros = prompt('Ingrese los números (CON UN ESPACIO ENTRE MEDIO DE CADA NÚMERO)');
    var arr = numeros.split(' ');
    var arrNumPares = [];

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0) {
            arrNumPares.push(arr[i]);
        }
    }
    return console.log(arrNumPares);
}

function arrayVocales8() {
    var palabras = prompt('Ingrese la palabra (CON UN ESPACIO ENTRE MEDIO DE CADA PALABRA)');
    var arr = palabras.split(' ');
    var arrVocal = [];

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].charAt(0).toUpperCase() === 'A' || arr[i].charAt(0).toUpperCase() === 'E' || arr[i].charAt(0).toUpperCase() === 'I' || arr[i].charAt(0).toUpperCase() === 'O' || arr[i].charAt(0).toUpperCase() === 'U')
        {
            arrVocal.push(arr[i]);
        }
    }
    return console.log(arrVocal);
}

function agrandarFuente13(claseHTML) {
    var fontSize = "30px";
    $(`.${claseHTML}`).css("font-size", `${fontSize}`);
}

function borrarContenido14() {
    var string = "-";
    $("p").text(string);
}

const hipervinculoYoutube = function() {
    var link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    $("#redireccion").text("Click aquí para redirigir a Youtube").attr("href", link);
}

const hipervinculoGoogle = function() {
    var link = "https://www.google.com";
    $("#redireccion").text("Click aquí para redirigir a Google").attr("href", link);
}

const hipervinculoFacebook = function() {
    var link = "https://www.facebook.com";
    $("#redireccion").text("Click aquí para redirigir a Facebook").attr("href", link);
}

$("#tablaColor1").mouseover(function() {
    var color = "#ffcd63";
    $("#tablaColor1").css("background-color", color);
})
$("#tablaColor2").mouseover(function() {
    var color = "#0045b1";
    $("#tablaColor2").css("background-color", color);
})
$("#tablaColor3").mouseover(function() {
    var color = "#0089d9";
    $("#tablaColor3").css("background-color", color);
})
$("#tablaColor4").mouseover(function() {
    var color = "#00d5ff";
    $("#tablaColor4").css("background-color", color);
})

var estado = true;
$("#redimencionar").dblclick(function() {
    if (estado === true){
        $("#redimencionar").css("width", "250px");
        $("#redimencionar").css("height", "250px");
        $(".parrafosAnimacion20").css("margin-top", "240px");
        estado = false;
    }
    else{
        $("#redimencionar").css("width", "800px");
        $("#redimencionar").css("height", "70px");
        $(".parrafosAnimacion20").css("margin-top", "60px");
        estado = true;
    }
})

$("#parrafo2-EJE20").css("display", "none");
$("#parrafo2-EJE20").css("opacity", "0");
$(".bordesParrafo").click(function() {
    $("#parrafo1-EJE20").animate({opacity: '0'});
    setTimeout(() => {
        $("#parrafo1-EJE20").hide();
        $("#parrafo2-EJE20").css("display", "inline");
        $("#parrafo2-EJE20").animate({opacity: '1'});
    }, 1000);
})

$("#rediccFacebook").click(function(e) {
    e.preventDefault();
    var link = $("#rediccFacebook").attr('href');
    console.log(link);
})

$("#enviarForm").click(function(e) {
    e.preventDefault();
    var username = $("#username").val();
    $("#Enviado").text("El formulario fue enviado");
    $("#usernameReg").html(`El username es: <strong>${username}</strong>`);
})
