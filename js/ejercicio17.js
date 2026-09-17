const manejarTareas = (() => {
    const CLAVE = "tareas";
    const obtenerTareas = () => {
        const datos = localStorage.getItem(CLAVE);
        return datos ? JSON.parse(datos) : [];
    };
    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE, JSON.stringify(tareas));
    };
    const agregar = (texto) => {
        const tareas = obtenerTareas();
        tareas.push({ tarea: texto, completada: false });
        guardarTareas(tareas);
    };
    const eliminar = (indice) => {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1);
        guardarTareas(tareas);
    };
    return { obtenerTareas, agregar, eliminar };
})();

const renderizarTareas = () => {
    const contenedor = document.getElementById("listaTareas");
    const tareas = manejarTareas.obtenerTareas();
    contenedor.innerHTML = '';
    if (tareas.length === 0) {
        contenedor.innerHTML = '<p class="mensaje-vacio">No hay tareas pendientes.</p>';
        return;
    }
    tareas.forEach((item, indice) => {
        const div = document.createElement("div");
        div.className = "tarea";
        const span = document.createElement("span");
        span.className = "tarea-texto";
        span.textContent = item.tarea;
        const boton = document.createElement("button");
        boton.className = "boton-eliminar";
        boton.textContent = "Eliminar";
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: 'warning',
                title: '¿Eliminar tarea?',
                text: 'Esta acción no se puede deshacer.',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#6366f1'
            }).then((result) => {
                if (result.isConfirmed) {
                    manejarTareas.eliminar(indice);
                    renderizarTareas();
                    Swal.fire({
                        icon: 'success',
                        title: 'Tarea eliminada',
                        timer: 1200,
                        showConfirmButton: false
                    });
                }
            });
        });
        div.appendChild(span);
        div.appendChild(boton);
        contenedor.appendChild(div);
    });
};

const agregarTarea = () => {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim();
    if (texto === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Escribe una tarea antes de agregarla.',
            confirmButtonColor: '#4338ca'
        });
        input.focus();
        return;
    }
    manejarTareas.agregar(texto);
    input.value = '';
    input.focus();
    renderizarTareas();
};

document.getElementById("btnAgregar").addEventListener("click", agregarTarea);
document.getElementById("nuevaTarea").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarTarea();
    }
});
document.addEventListener("DOMContentLoaded", renderizarTareas);