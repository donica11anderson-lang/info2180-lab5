document.addEventListener("DOMContentLoaded", () => {
  const lookupButton = document.getElementById("lookup");
  const countryInput = document.getElementById("country");
  const result = document.getElementById("result");

  lookupButton.addEventListener("click", () => {
    const country = countryInput.value.trim();

    fetch("world.php?country=" + encodeURIComponent(country))
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        console.error("Error:", error);
        result.innerHTML = "<p>Something went wrong.</p>";
      });
  });
});