//<!-- contronller.js Xiangde Ou 2023.2.24 -->
var Userdb = require('../model/model');
//<!-- render.js Xiangde Ou 2023.2.24 -->
const axios = require('axios');


// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        number : req.body.number,
        gender: req.body.gender,
        status : req.body.status
    })
    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/business/add_user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
        
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;
    console.log(id);
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

//create a reference to the db Schema which is the model
//we want to display the bookList

exports.add_user = (req, res) =>{
    res.render('business/add_user',{title:'Add_user'});
}

exports.updateuser = (req, res) =>{
    //axios.get('http://localhost:8000/business/api/users', { params : { id : req.query.id }})
    axios.get('https://comp229-assignment1.onrender.com/business/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("business/updateuser", { title:'Updateuser',user : userdata.data})
        console.log(userdata.data);
    })
    .catch(err =>{
        res.send(err);
    })
}


