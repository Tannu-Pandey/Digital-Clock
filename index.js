function demo() {
  const d = new Date();
  document.getElementById("clock").innerText = d.toLocaleTimeString();
  setTimeout(demo, 1000);
}