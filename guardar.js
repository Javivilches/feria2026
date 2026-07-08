const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxX1IiPz0RPEuoqTugXhk-6nhE3BSMH-ijEDlP9BeMFpPHqZkyUSN9ifeVmXAWuEOBC/exec";

function guardarRespuesta(clave, valor) {
  localStorage.setItem(clave, valor);

  const datos = {
    nombre: obtenerRespuesta("nombre"),
    clave: clave,
    valor: valor
  };

  fetch(URL_SCRIPT, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(datos)
  });
}

function obtenerRespuesta(clave) {
  return localStorage.getItem(clave) || "";
}