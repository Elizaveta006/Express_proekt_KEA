var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Довакина*/
router.get('/dovakin', function(req, res, next) {
    res.send("<h1>Страница Довакина</h1>")
});

/* Страница Алдуина*/
router.get('/alduin', function(req, res, next) {
    res.send("<h1>Страница Алдуина</h1>")
});

/* Страница Харкона*/
router.get('/harkon', function(req, res, next) {
    res.send("<h1>Страница Харкона</h1>")
});

/* Страница Мирака*/
router.get('/mirak', function(req, res, next) {
    res.send("<h1>Страница Мирака</h1>")
});


module.exports = router;
