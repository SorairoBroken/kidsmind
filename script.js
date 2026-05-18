document.getElementById('btn-explorar').addEventListener('click', function() {
    alert('¡Bienvenido a Kid\'s Mind! Prepárate para una aventura pedagógica.');
});

<script>
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Opcional: Cierra el menú automáticamente cuando el usuario hace clic en una opción
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
</script>