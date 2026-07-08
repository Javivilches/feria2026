function entrar() {
  const codigo = document.getElementById("codigoInput").value.trim().toUpperCase();

  if (!socios[codigo]) {
    document.getElementById("error").textContent = "Código de socio no válido.";
    return;
  }

  mostrarPortal(codigo);
}

function mostrarPortal(codigo) {
  const socio = socios[codigo];

  localStorage.setItem("nombre", socio.nombre);
  localStorage.setItem("codigo", codigo);

  document.getElementById("login").classList.add("hidden");
  document.getElementById("portal").classList.remove("hidden");

  document.getElementById("bienvenida").textContent = `¡Bienvenido, ${socio.nombre}!`;

  history.replaceState(null, "", `?socio=${codigo}`);
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const codigo = params.get("socio");

  if (codigo && socios[codigo]) {
    mostrarPortal(codigo);
  }
};