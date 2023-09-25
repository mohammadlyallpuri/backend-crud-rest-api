// Import the Express module and create an Express router.
var router = require('express').Router();

// Route to list customers (GET /api/customers)
router.get('/', function (req, res) {
    res.send("These are your Customers");
});

// Route to add a customer (GET /api/customers/add)
router.get('/add', function (req, res) {
    res.send('This API will add a customer to the DB');
});

// Export the router so it can be used in other parts of your application.
module.exports = router;
