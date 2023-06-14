const dragDropContainer = document.querySelector('.drag-drop-container');
const filenameSpan = document.querySelector('.filename');

dragDropContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragDropContainer.classList.add('drag-over');
});

dragDropContainer.addEventListener('dragleave', () => {
  dragDropContainer.classList.remove('drag-over');
});

dragDropContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  dragDropContainer.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  updateFilename(file.name);
});

function updateFilename(name) {
  filenameSpan.textContent = name;
}

// Limpiar el nombre de archivo al seleccionar un archivo mediante el input de tipo file
const fileInput = document.getElementById('edit-product-img');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  updateFilename(file ? file.name : '');
});