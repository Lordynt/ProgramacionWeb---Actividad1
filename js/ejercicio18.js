const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

const agregarElemento = () => {
    const texto = input.value.trim();
    if (texto === '') {
        alert('Escribe algo para agregar a la lista.');
        input.focus();
        return;
    }
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const textoNodo = document.createTextNode(texto);
    li.appendChild(textoNodo);
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-eliminar');
    botonEliminar.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = '';
    input.focus();
};

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarElemento();
    }
});