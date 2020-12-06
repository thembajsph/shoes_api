module.exports = function apiFactory(instance) {

    const allShoes = async function (req, res) {

        try {

            var allShoes = await instance.listAllShoes()
            res.json({
                status: 'success',
                data: allShoes
            });
        }

        catch (err) {

            res.json({
                status: "error",
                error: err.stack

            });
        }
    };

    const AllByBrands = async function (req, res) {

        try {

            let brandName = req.params.brandname;

            console.log(brandName)
            var brandShoes = await instance.allShoesByBrand(brandName)
            console.log(brandShoes);
            res.json({
                status: 'success',
                dataB: brandShoes

            });
        }

        catch (err) {

            res.json({
                status: "error",
                error: err.stack

            });
        }
    };


    const AllbySize = async function (req, res) {

        try {
            let sizeLength = req.params.sizename;

            console.log(sizeLength);
            var sizeData = await instance.allShoesBySize(sizeLength)
            console.log(sizeData);
            res.json({
                status: 'success',
                dataS: sizeData

            });
        }

        catch (err) {

            res.json({
                status: "error",
                error: err.stack

            });
        }
    };



    const AllbySizeBrand = async function (req, res) {

        try {
            let brandName = req.params.brandname;
            console.log(brandName);

            const sizeLength = req.params.sizename;
            console.log(sizeLength);

            var combinedData = await instance.allByBrandAndSize(brandName, sizeLength)
            console.log(combinedData);
            res.json({
                status: 'success',
                dataAb: combinedData

            });

        }

        catch (err) {

            res.json({
                status: "error",
                error: err.stack

            });
        }
    };

    const updateShoeSoldOut = async function (req, res) {


        try {
            const data = req.body;
            const id = req.params.id;
            const description = data.description;

            await instance.update({
                id,
                description
            })
            res.json({
                status: 'success'
            });
        }
        catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }

    };

    const addNewNew = async function (req, res) {

        // const shoeId = req.params.id

        // var actionLists2 = instance.actions(shoeId)

        try {
            let input = req.body;
            await instance.add(input);
            res.json({
                status: 'success',
                data: categories
            });
        }
        catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };



    return {
        allShoes,
        AllByBrands,
        AllbySize,
        AllbySizeBrand,
        updateShoeSoldOut,
        addNewNew,

    }



}

