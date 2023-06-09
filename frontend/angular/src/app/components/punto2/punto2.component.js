// punto2.component.js
function mostrarAlerta() {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="alert alert-success alert-dismissible" role="alert">
        <div>Transacción guardada</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    alertPlaceholder.innerHTML = '';
    alertPlaceholder.append(wrapper);
}
