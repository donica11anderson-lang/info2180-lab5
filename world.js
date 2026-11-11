document.addEventListener("DOMContentLoaded", () => {
  const lookupButton = document.getElementById("lookup");
  const citiesButton = document.getElementById("lookup-cities");
  const countryInput = document.getElementById("country");
  const result = document.getElementById("result");

  function getData(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        console.error("Error:", error);
        result.innerHTML = "<p>Something went wrong.</p>";
      });
  }

  lookupButton.addEventListener("click", () => {
    const country = countryInput.value.trim();
    getData("world.php?country=" + encodeURIComponent(country));
  });

  citiesButton.addEventListener("click", () => {
    const country = countryInput.value.trim();
    getData("world.php?country=" + encodeURIComponent(country) + "&lookup=cities");
  });
});

