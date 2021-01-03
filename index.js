let dummyData = [
    {
        "name": "test1",
        "category": "men",
        "brand": "puma",
        "price": "$30",
        "color": "black"
    },
    {
        "name": "test2",
        "category": "women",
        "brand": "roadster",
        "price": "$150",
        "color": "blue"
    },
    {
        "name": "test3",
        "category": "kid",
        "brand": "armani",
        "price": "$300",
        "color": "brown"
    },
    {
        "name": "test4",
        "category": "men",
        "brand": "zara",
        "price": "$350",
        "color": "maroon"
    },
    {
        "name": "test5",
        "category": "women",
        "brand": "zara",
        "price": "$510",
        "color": "white"
    },
    {
        "name": "test6",
        "category": "kids",
        "brand": "jack and jones",
        "price": "$4000",
        "color": "grey"
    },
    {
        "name": "test7",
        "category": "men",
        "brand": "puma",
        "price": "$670",
        "color": "olive"
    },
    {
        "name": "test8",
        "category": "women",
        "brand": "roadster",
        "price": "$1000",
        "color": "black"
    }
];

let selectedCategory;
let brands = [];
let prices = [];
let colors = [];

//These functions are called inside onclick event in html page buttons

function categorySelect(data) {
  selectedCategory = data.value;
  console.log(selectedCategory);
}

function selectedBrands(data) {
  brands.push(data.value);
  console.log(brands);
}

function selectedPrice(data) {
  prices.push(data.value);
  console.log(prices);
}

function selectedColor(data) {
  colors.push(data.value);
  console.log(colors);
}
