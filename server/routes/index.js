//<!-- index.js Xiangde Ou 2023.2.24 -->

let  express = require('express');
let router = express.Router();
let indexController = require('../controller/index');


/* GET home page. */
router.get('/', indexController.homeRoutes);

/* GET About page. */
router.get('/about',indexController.about);

/* GET Projects page. */
router.get('/projects',indexController.projects);

/* GET Services page. */
router.get('/services',indexController.services);

/* GET Contact page. */
router.get('/contact',indexController.contact);

/*GET to perform test*/
router.get('/test', indexController.test);




/*GET to perform test*/
router.get('/business',requireAuth, indexController.business);

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

let businessContronller = require('../controller/business');

/* GET Business page. */
//router.get('/business',businessContronller.business)

/* GET Add_user page. */
router.get('/business/add_user',requireAuth,businessContronller.add_user);

/* GET Updateuser page. */
router.get('/business/updateuser',requireAuth,businessContronller.updateuser);

//API
router.post('/business/api/users',businessContronller.create);

router.get('/business/api/users',businessContronller.find);

router.put('/business/updateuser/api/users/:id',businessContronller.update);

router.delete('/business/api/users/:id',businessContronller.delete);



/*GET to perform test*/
router.get('/login', indexController.login);


const authController = require('../controller/auth');

/*GET Route for displaying the Login page*/
router.get('/login', authController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', authController.processLoginPage);

/*GET Route for register page*/
router.get('/register', authController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', authController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', authController.performLogout);

module.exports = router;



