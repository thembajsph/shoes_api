const filteredShoesList = document.querySelector('.filteredShoes');
const filterBtn = document.querySelector('.filterBtn');


// get the template text from the dom 
const filteredShoesTemplateText = document.querySelector('.filteredShoesTemplate').innerHTML


//compile the template 
const filteredShoesTemplate = Handlebars.compile(filteredShoesTemplateText);


var shoesFilter = shoesFilter();

const all = document.querySelector(".allSelect");
const brand = document.querySelector(".brandSelect");
const size = document.querySelector(".sizeSelect");


filterBtn.addEventListener('click', function () {

    var allShoes = all.value;
    console.log(allShoes);
    var selectedBrand = brand.value; 
    console.log(selectedBrand); 
     // color.options[color.selectedIndex].value;
    var selectedSize = size.value;
    console.log(selectedSize);


    console.log(allShoes);
    console.log(selectedBrand);
    console.log(selectedSize);


    var filterUrl = shoesFilter.filter(allShoes ,selectedBrand, selectedSize );

    axios
        .get(filterUrl)
        .then(function (result) {

            filteredShoesList.innerHTML = filteredShoesTemplate({
                filteredShoes: result.data
            })

        })

});