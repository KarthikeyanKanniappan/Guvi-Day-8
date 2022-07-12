let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  let data = JSON.parse(request.responseText);
  console.log(data);

  // a.Get all the countries from the Asia continent /region using the Filter function
  let asianCountries = [];
  let asia = data.filter((el) => {
    if (el.continents[0] === "Asia") {
      asianCountries.push(el.name.common);
    }
  });
  console.log(asianCountries);

  //   b.Get all the countries with a population of less than 2 lakhs using Filter function
  let populationCountries = [];
  let populationCount = data.filter((el) => {
    if (el.population < 200000) {
      populationCountries.push(el.name.common);
    }
  });
  console.log(populationCountries);

  // c.Print the following details name, capital, flag using forEach function
  let x = 1;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "block";
    document.body.append(div);
    let para = document.createElement("p");
    para.innerHTML = `${x}.<b>Name </b>: ${el.name.common}, <b>Capital</b>: ${el.capital}`;
    div.append(para);
    let image = document.createElement("img");
    image.src = el.flags.png;
    div.append(image);
    x++;
  });

  console.log(" ");
  // d.Print the total population of countries using reduce function

  let popula = data.reduce((acc, el) => acc + el.population, 0);
  console.log(`World total population is ${popula}`);

  //   e.Print the country which uses US Dollars as currency
  let dollarCountry = [];
  let countryHasDollars = data.filter((el) => {
    if (el?.currencies?.USD) {
      dollarCountry.push(el.name.common);
    }
  });
  console.log(dollarCountry);
};
