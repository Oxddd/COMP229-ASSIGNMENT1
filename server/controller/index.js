const axios = require('axios');

module.exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    res.render('index', { title: 'Index' });
}

module.exports.about = (req, res) => {
    res.render('about', { title: 'About' });
}

module.exports.projects = (req, res) => {
    res.render('projects', { title: 'Projects' });
}

module.exports.services = (req, res) => {
    res.render('services', { title: 'Services' });
}

module.exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
}

module.exports.test = (req, res) => {
    res.render('test', { title: 'Test' });
}

module.exports.business = (req, res) => {
    // Make a get request to /api/users
    //axios.get('http://localhost:8000/business/api/users')
    axios.get('https://comp229-assignment1.onrender.com/business/api/users')
        .then(function(response){

            console.log(response.data)

            //An alphabetically sorted list of contacts should appear on this page.
            sortedNames = response.data
            sortedNames.sort(function(a,b){
                aName = a.name.toUpperCase();
                bName = b.name.toUpperCase();
                if (aName < bName) {
                    return -1;
                  }
                  if (aName > bName) {
                    return 1;
                  }
                  return 0;
            });

            //console.log(sortedNames);

            res.render('business/business',{ title: 'Business',users:response.data});
            console.log("render");
        })
        .catch(err =>{
            res.send(err);
        })
}


module.exports.login = (req, res, next) => {
    //check if the user is already logged in*/
    if (!req.user)
    {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
            
        })
    }
    else
    {
        return res.redirect('/business');
    }
}
