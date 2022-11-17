const cities = ["Benos Aires", "Bogota", "Lima", "Santiago de Chile"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;
