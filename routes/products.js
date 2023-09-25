// Import the Express module and create an Express router.
var router = require('express').Router();

// Route to list products (GET /api/products)
router.get('/', function (req, res) {
    res.send("These are your products");
});

// Route to add a product (GET /api/products/add-product)
router.get('/add-product', function (req, res) {
    res.send('This API will add your product to the DB');
});

// Export the router so it can be used in other parts of your application.
module.exports = router;
