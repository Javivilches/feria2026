const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxX1IiPz0RPEuoqTugXhk-6nhE3BSMH-ijEDlP9BeMFpPHqZkyUSN9ifeVmXAWuEOBC/exec";

async function guardarRespuesta(clave, valor) {
  localStorage.setItem(clave, valor);

  const datos = {
    nombre: obtenerRespuesta("nombre"),
    clave: clave,
    valor: valor
  };

  const body = new URLSearchParams();
  body.append("datos", JSON.stringify(datos));

  await fetch(URL_SCRIPT, {
    method: "POST",
    body: body
  });
}

function obtenerRespuesta(clave) {
  return localStorage.getItem(clave) || "";
}

async function guardarYAvanzar(clave, valor, destino) {
  await guardarRespuesta(clave, valor);
  window.location.href = destino;
}