const router = require('express').Router();
const {sources, topNews, allNews} =  require('../controllers/appController');

//all source routes
router.get('/source', sources);
router.get('/topnews/:source', topNews);
router.get('/allnews/:source', allNews);

module.exports = router;