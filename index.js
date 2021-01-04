let dummyData = [
    {
        "name": "test1",
        "category": "men",
        "brand": "puma",
        "price": 30,
        "color": "black"
    },
    {
        "name": "test2",
        "category": "women",
        "brand": "roadster",
        "price": 150,
        "color": "blue"
    },
    {
        "name": "test3",
        "category": "kids",
        "brand": "armani",
        "price": 300,
        "color": "brown"
    },
    {
        "name": "test4",
        "category": "men",
        "brand": "zara",
        "price": 350,
        "color": "maroon"
    },
    {
        "name": "test5",
        "category": "women",
        "brand": "zara",
        "price": 510,
        "color": "white"
    },
    {
        "name": "test6",
        "category": "kids",
        "brand": "jack and jones",
        "price": 4000,
        "color": "grey"
    },
    {
        "name": "test7",
        "category": "men",
        "brand": "puma",
        "price": 670,
        "color": "olive"
    },
    {
        "name": "test8",
        "category": "women",
        "brand": "roadster",
        "price": 1000,
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
  let filteredCategory = dummyData.filter((data) => {
    return data.category === selectedCategory;
  })
  console.log(selectedCategory);
  console.log("filtered category: ",filteredCategory);
  
}

function selectedBrands(data) {
  brands.push(data.value);

  let filteredBrands = dummyData.filter((data) => {
    return brands.some((brand) => {
       return data.brand === brand;
    })
  })
  
  console.log(brands);
  console.log("filteredBrands: ", filteredBrands);
}

function selectedPrice(data) {
  prices.push(data.value);

  let filteredPrices = dummyData.filter((data) => {
    return prices.some((price) => {
        switch(price) {
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
    })
  })

  console.log(prices);
  console.log("filteredPrices: ", filteredPrices);
}

function selectedColor(data) {
  colors.push(data.value);

  let filteredColors = dummyData.filter((data) => {
    return colors.some((color) => {
       return data.color === color;
    })
  })

  console.log(colors);
  console.log("filteredColors: ", filteredColors);
}
