var Userdb = require('../model/model');
const validator = require('validator');
const mongoose = require('mongoose');

//create and same new user
exports.create = (req,res) =>{
    let { name, email } = req.body;

    // Trim spaces from the name
    name = name.trim();

    // Validate and sanitize name (allow letters, numbers, and spaces)
    if (!name || validator.isEmpty(name) || !/^[a-zA-Z0-9 ]+$/.test(name)) {
        return res.status(400).send({ message: "Invalid name. Only letters, numbers, and spaces allowed." });
    }

    // Validate email
    if (!validator.isEmail(email)) {
        return res.status(400).send({ message: "Invalid email address." });
    }

    // Store sanitized data
    const user = new Userdb({ 
        name: validator.escape(name),  // Prevents XSS
        email: email 
    });

    user.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: "Error saving user." }));
}

//retrieve and return all users/retrieve and return a single user

exports.find = (req,res)=>{
    if (req.query.id) {
        const id = req.query.id;

        // Validate ObjectId before querying
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid user ID format." });
        }

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id });
            });

    } else {
        Userdb.find()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error retrieving user information" });
            });
    }
}
//update a new identified user by user id

exports.update = (req,res)=>{
    if (!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty." });
    }

    const id = req.params.id;

    // Validate ObjectId before updating
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid user ID format." });
    }

    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true }) // new: true returns updated document
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with ID ${id}. Maybe user not found!` });
            } else {
                res.send({ message: "User updated successfully!", data });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating user information." });
        });
}

//Delete a user with speicified user 
exports.delete =(req,res)=>{
    const id = req.params.id;

    // Validate ObjectId before deleting
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid user ID format." });
    }

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete user with ID ${id}. Maybe the ID is incorrect.` });
            } else {
                res.send({ message: "User was deleted successfully!" });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete user with ID " + id });
        });
}
