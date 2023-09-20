const cities = {
  Paris: ["Skopje"],
  Zurich: ["Amsterdam"],
  Prague: ["Zurich"],
  Barcelona: ["Berlin"],
  Kiev: ["Prague"],
  Skopje: ["Paris"],
  Amsterdam: ["Barcelona"],
  Berlin: ["Kiev", "Amsterdam"],
};

const citiesToVisit = {
  Amsterdam: false,
  Kiev: false,
  Zurich: false,
  Prague: false,
  Berlin: false,
  Barcelona: false,
};

let route = [];

function findRoute(city) {
  route.push(city);
  citiesToVisit[city] = true;
  const destinations = cities[city];
  for (const destination of destinations) {
    if (!citiesToVisit[destination]) {
      findRoute(destination);
    }
  }
}

findRoute("Kiev");

console.log("Route:", route.join(" -> "));
