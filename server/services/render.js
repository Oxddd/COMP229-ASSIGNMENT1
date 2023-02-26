//<!-- render.js Xiangde Ou 2023.2.24 -->
const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    res.render('index', { title: 'Index' });
}

exports.about = (req, res) => {
    res.render('about', { title: 'About' });
}

exports.projects = (req, res) => {
    res.render('projects', { title: 'Projects' });
}

exports.services = (req, res) => {
    res.render('services', { title: 'Services' });
}

exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
}

exports.business = (req, res) => {

    // Make a get request to /api/users
    axios.get('http://localhost:3000/business/api/users')
        .then(function(response){
            console.log(response.data)

            //An alphabetically sorted list of contacts should appear on this page.
            sortedNames = response.data
            //console.log("sortedNames");
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

            res.render('business',{ title: 'Business',users:response.data});
        })
        .catch(err =>{
            res.send(err);
        })

}

exports.add_user = (req, res) =>{
    res.render('add_user',{title:'Add_user'});
}

exports.updateuser = (req, res) =>{
    axios.get('http://localhost:3000/business/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("updateuser", { title:'Updateuser',user : userdata.data})
        console.log(userdata.data);
    })
    .catch(err =>{
        res.send(err);
    })
}



