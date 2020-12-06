function shoesFilter() {


    function filter(brandName, sizeL) {

        if (brandName == "" && sizeL == "") {


            const url = 'http://localhost:3001/api/shoes'
            console.log(url);
            return url;

        } else if (!(brandName == "") && (sizeL == "")) {

            // const url = 'http://api-tutor.herokuapp.com/v1/cars/make/'+ make +'/color/'+ x;
            const url = 'http://localhost:3001/api/shoes/brand/' + brandName
            console.log(url);
            return url;


        } else if ((brandName == "") && !(sizeL == "")) {
            return 'http://localhost:3001/api/shoes/size/?' + sizeL
        }


        else if (!(brandName == "") && !(sizeL == "")) {

            return 'http://localhost:3001/api/shoes/brand/' + brandName + '/size/' + sizeL;

        }

    }

    return {
        filter,

    }


}