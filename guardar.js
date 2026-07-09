const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxX1IiPz0RPEuoqTugXhk-6nhE3BSMH-ijEDlP9BeMFpPHqZkyUSN9ifeVmXAWuEOBC/exec";

function guardarRespuesta(clave, valor) {
  localStorage.setItem(clave, valor);

  const datos = {
    nombre: obtenerRespuesta("nombre"),
    clave: clave,
    valor: valor
  };

  const formData = new FormData();
  formData.append("datos", JSON.stringify(datos));

  fetch(URL_SCRIPT, {
    method: "POST",
    body: formData
  });
}

function obtenerRespuesta(clave) {
  return localStorage.getItem(clave) || "";
}