// Script principal TP1 - Funcionalidad dinámica para portada y perfiles
document.addEventListener('DOMContentLoaded', () => {
    console.log('TP1 Base cargada correctamente.');

    // Interactividad en Portada (index.html)
    const welcomeAlertBtn = document.getElementById('welcomeAlertBtn');
    if (welcomeAlertBtn) {
        welcomeAlertBtn.addEventListener('click', () => {
            alert('¡Bienvenido al sitio grupal del TP1! Explora los perfiles de los 5 integrantes y revisa nuestra bitácora.');
        });
    }

    // Interactividad en Perfiles (memberX.html) - Usando clases Bootstrap (.d-none) sin estilos en línea
    const toggleBioBtn = document.getElementById('toggleBioBtn');
    const extraInfo = document.getElementById('extraInfo');
    if (toggleBioBtn && extraInfo) {
        toggleBioBtn.addEventListener('click', () => {
            extraInfo.classList.toggle('d-none');
            if (extraInfo.classList.contains('d-none')) {
                toggleBioBtn.textContent = 'Ver detalles adicionales';
                toggleBioBtn.classList.replace('btn-primary', 'btn-outline-primary');
            } else {
                toggleBioBtn.textContent = 'Ocultar detalles adicionales';
                toggleBioBtn.classList.replace('btn-outline-primary', 'btn-primary');
            }
        });
    }
});
