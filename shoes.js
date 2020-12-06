module.exports = function shoes(pool) {


    /** 
    
    
    * He wants an API that can:
    
     * List all shoes in stock
     * List all shoes for a given brand
     * List all shoes for a given size
     * List all shoes for a given brand and size
     * Update the stock levels when a shoe is sold
    *  Add a new new shoe to his stock.
    */

    async function addBrand(brandName) {

        await pool.query('INSERT INTO brands_table (brand) values ($1)', [brandName])

    };

    async function addColour(colour) {

        await pool.query('INSERT INTO colour_table (colour) values ($1)', [colour])

    };

    async function addSize(size) {

        await pool.query('INSERT INTO size_table (brand) values ($1)', [size])

    };





    const wf = async (brand_id, colour_id, size_id) => {


        var shoeId = await getIdOfShoe(brand_id, colour_id, size_id)
        // console.log({ userId })

        // if its true get id of shoe
        if (shoeId) {

            // delete from all shift if its user is  there
            await deleteAllShoes(shoeId)

            // then add new shift add days_id and userID
            await addNewShoe(shoeId)

        }

        //return get all shift with all the shifts in a table
        return await listAllShoes();

    };

    //filtering functions
    async function listAllShoes() {
        //   var results =  await pool.query('select brand, size,colour, price, in_stock from brands_table, size_table, colour_table, products_table')
        var results = await pool.query('select brand, size,colour, price, in_stock from products_table join brands_table  on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id')


        console.log(results.rows);
        return results.rows



    };


    async function allShoesByBrand(brand) {

        var results = await pool.query('select brand, size,colour, price, in_stock from products_table join brands_table on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id where brand = $1', [brand])
        return results.rows
    };


    async function allShoesBySize(size) {

        var results = await pool.query('select brand, size,colour, price, in_stock from products_table join brands_table on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id where size = $1', [size])
        return results.rows


    };


    async function allByBrandAndSize(brand, size) {

        var results = await pool.query('select brand, size,colour, price, in_stock from products_table join brands_table on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id where (brand, size) = ($1, $2)', [brand, size])
        return results.rows

    }


    async function UpdateStock() {



    }


    // update query
    async function addNewNew() {




    }


    return {

        listAllShoes,
        allShoesByBrand,
        allShoesBySize,
        allByBrandAndSize,
        UpdateStock,
        addNewNew,
        addBrand,
        addColour,
        addSize


    }

}