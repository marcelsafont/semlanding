console.log('init script')

function muteToggle() {
    const video = document.querySelector('#video');
    if (video.muted === true) {
        video.muted = false;
      }
      else if (video.muted === false) {
        video.muted = true;
      }
}

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    let formValido = true;

    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
        formValido = false;
    } else {
        errorNombre.textContent = '';
    }

    let apellidos = document.getElementById('apellidos');
    let errorApellidos = document.getElementById('errorApellidos');
    if (apellidos.value.trim() === '') {
        errorApellidos.textContent = 'Los apellidos son obligatorios.';
        formValido = false;
    } else {
        errorApellidos.textContent = '';
    }

    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (email.value.trim() === '') {
        errorEmail.textContent = 'El email es obligatorio.';
        formValido = false;
    } else if (!email.checkValidity()) {
        errorEmail.textContent = 'El email no tiene un formato correcto.';
        formValido = false;
    } else {
        errorEmail.textContent = '';
    }

    let aceptaPoliticas = document.getElementById('aceptaPoliticas');
    let errorPoliticas = document.getElementById('errorPoliticas');
    if (!aceptaPoliticas.checked) {
        errorPoliticas.textContent = 'Debes aceptar las políticas.';
        formValido = false;
    } else {
        errorPoliticas.textContent = '';
    }

    if (!formValido) {
        return false;
        
    } else {
        fetch('https://semfyc.us21.list-manage.com/subscribe/post?u=a4b89ba3614c3d1d94ac5f097&amp;id=5d80499926&amp;f_id=00d8f2e6f0', {
            method: 'POST',
            body: formData,
            mode: 'no-cors' 
        })
        .then(response => {
            dataLayer.push({'event': 'event_form_register'});
            window.location.href = 'confirmacion.html';
            // document.getElementById('registroForm').style.display = 'none';
            // document.getElementById('mensajeConfirmacion').style.display = 'flex';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
