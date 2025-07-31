document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('alerta-lista');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  // Campos del modal
  const modalTitulo = document.getElementById('modal-titulo');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalUbicacion = document.getElementById('modal-ubicacion');
  const modalFecha = document.getElementById('modal-fecha');

  // ✅ Cargar alertas desde API Flask
  fetch('/alertas')
    .then(res => {
      if (!res.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return res.json();
    })
    .then(data => {
      if (data.length === 0) {
        lista.innerHTML = '<p style="text-align:center;color:gray;">No hay alertas registradas</p>';
        return;
      }

      data.reverse().forEach(alerta => {
        const item = document.createElement('div');
        item.classList.add('alerta-item');
        item.innerHTML = `
          <div class="titulo">${alerta.titulo}</div>
          <div class="correo">${alerta.usuario}</div>
        `;

        // Mostrar detalles en modal al hacer click
        item.addEventListener('click', () => {
          modalTitulo.textContent = alerta.titulo;
          modalDescripcion.textContent = alerta.descripcion;
          modalUbicacion.textContent = alerta.ubicacion;
          modalFecha.textContent = alerta.fecha;
          modal.style.display = 'flex';
        });

        lista.appendChild(item);
      });
    })
    .catch(err => {
      console.error('Error al cargar alertas:', err);
      lista.innerHTML = '<p style="text-align:center;color:red;">Error al cargar alertas</p>';
    });

  // ✅ Cerrar modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
