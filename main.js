
const botonAgregar = document.getElementById("botonAgregar");
const elementoAsistentes = document.getElementById("asistentes");
const inputNombre = document.getElementById("nombre");

const asistentes = []

botonAgregar.onclick = () => {
  const nombre = inputNombre.value.trim();
  botonAgregar.innerText = "agregar otro";
  if (nombre !== ""){
      asistentes.push(nombre);
      mostrarAsistentes();
      inputNombre.value = "";
      inputNombre.focus();
  }
};

function mostrarAsistentes(){
  elementoAsistentes.innerHTML= "";
  asistentes.forEach((asistente, index) => {
    const parrafo = document.createElement("p");
    parrafo.textContent = asistente;

  
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => {
      asistentes.splice(index, 1); 
      mostrarAsistentes(); 
    };

    parrafo.appendChild(botonEliminar);
    elementoAsistentes.appendChild(parrafo);

  });
}

const boton = document.getElementById("idDeMiBoton");
boton.onclick = () => {
  
}

const elemento = document.getElementById("idDeMiElemento");
elemento.innerText = "TEXTO NUEVO";
const elementoInput = document.getElementById("idDeMiElementoInput");
const valor = elementoInput.value;
console.log(valor);
elementoInput.value = "NUEVO VALOR DE MI ELEMENTO INPUT"


