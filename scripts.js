var clientes = [
    {
        nombre : "Eliel",
        pass : 1234,
        saldo : 800
    },
    {
        nombre : "Saul",
        pass : 4321,
        saldo : 500
    },
    {
        nombre : "Rocio",
        pass : 8521,
        saldo : 300
    }
]
var usuario;

function logIn(){
    let Selector = document.getElementById("selector").value;
    //let Usuario = Selector.options[Selector.selectedIndex].value;
    let pass = parseInt(document.getElementById("pass").value);
    console.log(pass);
    console.log(Selector);
    usuario = clientes.filter(clientes => clientes.nombre == Selector);
    if(usuario.length == 0){
        alert("Ese usuario no existe");
    } else{
        if(pass == usuario[0].pass){
            interfaceChange();
        } else {
            alert("Acceso denegado, Ingrese la contraseña de nuevo");
        }
    }
}

function interfaceChange(){
    var inter = document.getElementById("interCol").innerHTML =
    `<h1 class="text-white mt-5">Bienvenido ${usuario[0].nombre}</h1>
                <h3 class="text-white mt-5">¿Qué desea hacer el día de hoy</h3>
                <div class="row mt-5">
                    <div class="col-4">
                        <button class="btn btn-light mt-5" onclick="consultarSaldo()">Consultar saldo</button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-light mt-5" onclick="ingresarFondos()">Ingresar fondos</button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-light mt-5" onclick="retirarFondos()">Retirar fondos</button>
                    </div>
                </div>
                <button class="btn btn-light mt-5" onclick="cerrarSesion()">Cerrar Sesion</button>`;
}

function consultarSaldo(){
    let info = document.getElementById("infoCol").innerHTML=
        `<h2 class="text-white mt-5">Consulta de Saldo</h2>
                <p class="text-white mt-5">Nombre: ${usuario[0].nombre}</p>
                <p class="text-white mt-5">Saldo actual: $${usuario[0].saldo}</p>`;
}

function ingresarFondos(){
    let info = document.getElementById("infoCol").innerHTML=
        `<h2 class="text-white mt-5">Ingresar fondos</h2>
        <p class="text-white mt-5">Ingrese cuanto va a agregar
            <input class="w-100" type="number" id="ingreso" placeholder="Monto">
        </p>
        <button class="btn btn-light mt-5" onclick="agregarFondos()">Aceptar</button>`;
}

function retirarFondos(){
    let info = document.getElementById("infoCol").innerHTML=
        `<h2 class="text-white mt-5">Retiro</h2>
        <p class="text-white mt-5">Ingrese cuanto desea retirar
            <input class="w-100" type="number" id="retiro" placeholder="Monto">
        </p>
        <button class="btn btn-light mt-5" onclick="sacarFondos()">Aceptar</button>`;
}

function agregarFondos(){
    let ingreso = parseInt(document.getElementById("ingreso").value);
    if(usuario[0].saldo == 990){
        alert("Lo sentimos, su cuenta a alcanzado el limite y no se puede hacer el deposito")
    } else{
        usuario[0].saldo = usuario[0].saldo + ingreso;
        if(usuario[0].saldo > 990){
            alert("Lo sentimos, su ingreso excede el limite, intente de nuevo");
            usuario[0].saldo = usuario[0].saldo - ingreso; 
        } else {
            alert(`Ingreso exitoso, su saldo actual es de ${usuario[0].saldo}`);
            consultarSaldo();
        }
    }
}

function sacarFondos(){
    let ingreso = parseInt(document.getElementById("retiro").value);
    if(usuario[0].saldo == 10){
        alert("Lo sentimos, su cuenta a alcanzado el limite y no se puede hacer el deposito")
    } else{
        usuario[0].saldo = usuario[0].saldo - ingreso;
        if(usuario[0].saldo < 10){
            alert("Lo sentimos, su retiro excede el limite, intente de nuevo");
            usuario[0].saldo = usuario[0].saldo + ingreso; 
        } else {
            alert(`Retiro exitoso, su saldo actual es de ${usuario[0].saldo}`);
            consultarSaldo();
        }
    }
}

function cerrarSesion(){
    window.location.reload();
}