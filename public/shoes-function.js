function shoesFilter() {


    function filter(brandName, sizeL) {

        if (brandName == "" && sizeL == "") {


            const url = '/api/shoes'
            console.log(url);
            return url;

        } else if (!(brandName == "") && (sizeL == "")) {

            // const url = 'http://api-tutor.herokuapp.com/v1/cars/make/'+ make +'/color/'+ x;
            const url = '/api/shoes/brand/' + brandName
            console.log(url);
            return url;


        } else if ((brandName == "") && !(sizeL == "")) {
            return '/api/shoes/size/?' + sizeL
        }


        else if (!(brandName == "") && !(sizeL == "")) {

            return '/api/shoes/brand/' + brandName + '/size/' + sizeL;

        }

    }

    return {
        filter,

    }


}