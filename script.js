const maxChars = 150;
function updateCounter() {
  const input = document.getElementById("input");
  const counter = document.getElementById("counter");
  const length = input.value.length;
  if (length > maxChars) {
    input.value = "";
    counter.textContent = "0/" + maxChars;
    counter.className = "";
    return;
  }
  counter.textContent = length + "/" + maxChars;
  counter.className = "";
  if (length > maxChars - 20) {
    counter.className = "warning";
  }
}