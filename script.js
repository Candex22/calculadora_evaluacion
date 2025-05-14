document.addEventListener('DOMContentLoaded', function () { // Cambio de tema claro/oscuro
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});

let result = document.getElementById('result'); // Obtiene el elemento input con id 'result'
function calculate(value) {
    if (value === 'clear') {
        result.value = ''; // Limpia el valor del input
    } else if (value === 'calculate') {
        try {
            result.value = eval(result.value); // Evalúa la expresión matemática
        } catch (error) {
            result.value = 'Error'; // Maneja errores en la evaluación
        }
    } else {
        result.value += value; // Añade el valor del botón al input
    }
}

