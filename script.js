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
    } else if (value === '%') {
        try {
            result.value = eval(result.value + "/100"); // Divide el valor por 100 para calcular el porcentaje
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'Math.sqrt(') {
        result.value += value; // Añade 'Math.sqrt(' al valor del input
    }
    else if (value === '**2') {
        try {
            result.value = eval(result.value + "**2"); // Evalúa el valor actual elevado a la potencia de 2
        } catch (error) {
            result.value = 'Error'; // Maneja cualquier error en la evaluación
        }
    }
    else if (value === 'Math.sin(' || value === 'Math.cos(' || value === 'Math.tan(' || value === 'Math.log(') {
        result.value += value; // Añade la función trigonométrica seleccionada al input
    }
    else if (value === '%') {
        try {
            result.value = eval(result.value + "/100"); // Calcula el porcentaje dividiendo por 100
        } catch (error) {
            result.value = 'Error'; // Maneja cualquier error en la evaluación
        }
    }else if (value === '(' || value === ')'){
        result.value += value; // Añade parentesis seleccionado al input
    }
    else {
        result.value += value; // Añade el valor del botón al input
    }
}

