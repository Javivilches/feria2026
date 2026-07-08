const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxX1IiPz0RPEuoqTugXhk-6nhE3BSMH-ijEDlP9BeMFpPHqZkyUSN9ifeVmXAWuEOBC/exec";

function guardarRespuesta(clave, valor) {
  localStorage.setItem(clave, valor);
}

function obtenerRespuesta(clave) {
  return localStorage.getItem(clave) || "";
}