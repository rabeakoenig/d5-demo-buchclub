"use strict";

// Holt über die Funktion /api/empfehlung eine kurze Buchempfehlung. Der Schlüssel steht nicht hier, sondern bei Netlify.
document.getElementById("los").addEventListener("click", function () {
  var wunsch = document.getElementById("wunsch").value;
  var ziel = document.getElementById("antwort");
  ziel.textContent = "…";
  fetch("/api/empfehlung", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ wunsch: wunsch }) })
    .then(function (r) { return r.json(); })
    .then(function (d) { ziel.textContent = d.empfehlung || d.fehler || "Keine Antwort."; })
    .catch(function () { ziel.textContent = "Keine Verbindung."; });
});
