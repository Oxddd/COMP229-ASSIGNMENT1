//<!-- index.js Xiangde Ou 2023.2.24 -->

var express = require('express');
var router = express.Router();

const contronller = require('../controller/contronller');
const services = require('../services/render')

/* GET home page. */
router.get('/',services.homeRoutes);

/* GET About page. */
router.get('/about',services.about)

/* GET Projects page. */
router.get('/projects',services.projects)

/* GET Services page. */
router.get('/services',services.services)

/* GET Contact page. */
router.get('/contact',services.contact)

/* GET Business page. */
router.get('/business',services.business)

/* GET Add_user page. */
router.get('/business/add_user',services.add_user);

/* GET Updateuser page. */
router.get('/business/updateuser',services.updateuser);


//API
router.post('/business/api/users',contronller.create);

router.get('/business/api/users',contronller.find);

router.put('/business/updateuser/api/users/:id',contronller.update);

router.delete('/business/api/users/:id',contronller.delete);

module.exports = router;
