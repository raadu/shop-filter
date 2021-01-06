let dummyData = [
    {
        "id": 1,
        "name": "test1",
        "category": "men",
        "brand": "puma",
        "price": 30,
        "color": "black",
        "discount": 20,
        "popularity": 1,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 2,
        "name": "test2",
        "category": "women",
        "brand": "roadster",
        "price": 150,
        "color": "blue",
        "discount": 30,
        "popularity": 2,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 3,
        "name": "test3",
        "category": "kids",
        "brand": "armani",
        "price": 300,
        "color": "brown",
        "discount": 40,
        "popularity": 3,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 4,
        "name": "test4",
        "category": "men",
        "brand": "zara",
        "price": 350,
        "color": "maroon",
        "discount": 65,
        "popularity": 1,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 5,
        "name": "test5",
        "category": "women",
        "brand": "zara",
        "price": 510,
        "color": "white",
        "discount": 70,
        "popularity": 2,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 6,
        "name": "test6",
        "category": "kids",
        "brand": "jack and jones",
        "price": 4000,
        "color": "grey",
        "discount": 10,
        "popularity": 3,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 7,
        "name": "test7",
        "category": "men",
        "brand": "puma",
        "price": 670,
        "color": "olive",
        "discount": 15,
        "popularity": 3,
        "image": "https://picsum.photos/200"
    },
    {
        "id": 8,
        "name": "test8",
        "category": "women",
        "brand": "roadster",
        "price": 1000,
        "color": "black",
        "discount": 40,
        "popularity": 2,
        "image": "https://picsum.photos/200"
    }
];

let selectedCategory;
let brands = [];
let prices = [];
let colors = [];
let finalFilter = [];

let divId = document.getElementById("json");


var templateString = `<div id="output"> 
<ul> 
    <% _(filteredArray).each(function(data) { %> 
        <li> 
            Name: <%= data.name %>, category: <%= data.category %>, Price: <%= data.price %>, color: <%= data.color %>
        </li> 
    <% }); %> 
</ul>`;

function showFilteredData() { 
    var outputDiv = document.querySelector('#json');

    // Obtain the template rendering function 
    // from template string 
    var templateFunction = _.template(templateString); 

    // Render the template with specified parameters 
    outputDiv.innerHTML = templateFunction({ 
        "name": "John",
        "filteredArray": finalFilter
    }); 
} 


function filterProducts() {

    let categoryFilter = categorySelect();
    let brandFilter = selectedBrands();
    let priceFilter = selectedPrice();
    let colorFilter = selectedColor();

    let combinedFilter = [...categoryFilter, ...brandFilter, ...priceFilter, ...colorFilter];

    categoryFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
        return categoryFilter.indexOf(n) !== -1
    })]

    brandFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
        return brandFilter.indexOf(n) !== -1
    })]

    priceFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
        return priceFilter.indexOf(n) !== -1
    })]

    colorFilter.length === 0 ? true : combinedFilter = [...combinedFilter.filter(n => {
        return colorFilter.indexOf(n) !== -1
    })]

    //Set finalFilter array
    finalFilter = [...new Set(combinedFilter.map(item => item))];

    showFilteredData();
}

//These functions are called inside onclick event in html page buttons

function categorySelect() {
    if (document.querySelector('input[name="gender"]:checked') !== null) {
        selectedCategory = document.querySelector('input[name="gender"]:checked').value;
        console.log("selectedCategory", selectedCategory);
        let filteredCategory = dummyData.filter((data) => {
            return data.category === selectedCategory;
        });

        return filteredCategory;
    }
    else {
        return [];
    }
}


function selectedBrands() {

    let checkedBoxValues = [];
    let selectedBrands = document.querySelectorAll('input[name="brand"]:checked');
    selectedBrands.forEach((brand) => {
        checkedBoxValues.push(brand.value);
    });
    brands = [...checkedBoxValues];

    let filteredBrands = dummyData.filter((data) => {
        return brands.some((brand) => {
            return data.brand === brand;
        });
    });

    return filteredBrands;
}

function selectedPrice() {

    let checkedBoxValues = [];
    let selectedPrices = document.querySelectorAll('input[name="price"]:checked');
    selectedPrices.forEach((price) => {
        checkedBoxValues.push(price.value);
    });
    prices = [...checkedBoxValues];


    let filteredPrices = dummyData.filter((data) => {
        return prices.some((price) => {
            switch (price) {
                case "-50":
                    return data.price < 50;
                case "50-100":
                    return data.price >= 50 && data.price <= 100;
                case "100-150":
                    return data.price >= 100 && data.price <= 150;
                case "150-200":
                    return data.price >= 150 && data.price <= 200;
                case "200-300":
                    return data.price >= 200 && data.price <= 300;
                case "300-500":
                    return data.price >= 300 && data.price <= 500;
                case "500-1000":
                    return data.price >= 500 && data.price <= 1000;
                case "+1000":
                    return data.price > 1000;
            }
        });
    });

    return filteredPrices;
}

function selectedColor() {

    let checkedBoxValues = [];
    let selectedColors = document.querySelectorAll('input[name="color"]:checked');
    selectedColors.forEach((color) => {
        checkedBoxValues.push(color.value);
    });
    colors = [...checkedBoxValues];


    let filteredColors = dummyData.filter((data) => {
        return colors.some((color) => {
            return data.color === color;
        });
    });

    return filteredColors;
}

// Implementing sortBy
const sortBy = document.getElementById("sortBy");

const sortElement = () => {
    let sortArray = [];

    if (sortBy.value === "popularity") {
        if (finalFilter.length === 0) {
            sortArray = [...dummyData]
            sortArray.sort(function (a, b) {
                return a.popularity - b.popularity;
            }
            );
        } else {
            sortArray = [...finalFilter]
            sortArray.sort(function (a, b) {
                return a.popularity - b.popularity;
            }
            );
        }
        sortArray.reverse();

    } else if (sortBy.value === "discount") {
        if (finalFilter.length === 0) {
            sortArray = [...dummyData]
            sortArray.sort(function (a, b) {
                return a.discount - b.discount;
            }
            );
        } else {
            sortArray = [...finalFilter]
            sortArray.sort(function (a, b) {
                return a.discount - b.discount;
            }
            );
        }
        sortArray.reverse();
    } else if (sortBy.value === "priceHigh") {

        if (finalFilter.length === 0) {
            sortArray = [...dummyData]
            sortArray.sort(function (a, b) {
                return a.price - b.price;
            }
            );
        } else {
            sortArray = [...finalFilter]
            sortArray.sort(function (a, b) {
                return a.price - b.price;
            }
            );
        }
        sortArray.reverse();

    } else if (sortBy.value === "priceLow") {

        if (finalFilter.length === 0) {
            sortArray = [...dummyData]
            sortArray.sort(function (a, b) {
                return a.price - b.price;
            }
            );
        } else {
            sortArray = [...finalFilter]
            sortArray.sort(function (a, b) {
                return a.price - b.price;
            }
            );
        }

    }


    console.log("sort Array", sortArray);
    finalFilter = [...sortArray];

    showFilteredData();
}

sortBy.addEventListener('change', sortElement);

