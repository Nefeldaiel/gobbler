var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.con;
  var data = "";
  var select_query = 
    'SELECT ipeen_restaurant_id, restaurant_name, phone_number, average_price, cuisine_style, average_score FROM ipeen_restaurant where ipeen_restaurant_id < 60050';
  db.query(select_query, function(err, rows) {
    if (err) {
      console.log(err);
    }
    var data = rows;
    res.render('index', { title: 'Restaurant information', data: data});
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
