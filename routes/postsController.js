const express = require('express');
const router = express.Router();
// Pour exploiter les ObjectID de Mongo
const ObjectID = require('mongoose').Types.ObjectId;

const postsModel = require("./../models/postsModel");


// Read the data in Mongo database 
router.get('/', (req, res) => {
    postsModel.PostsModel.find((err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            console.log("Error to get data : " + err);
        }
    })
})



// Create or Put data in Mongo Database
router.post('/', (req, res) => {

    const newPosts = new postsModel.PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newPosts.save((err, docs) => {
        if (!err) {
            res.send(docs)
            console.log(docs);
        }
        else {
            console.log("Error to get data : " + err);
        }
    })

})

// Update 
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknow : " + req.params.id)
    
    const updatedPosts = new postsModel.PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    postsModel.PostsModel.findByIdAndUpdate(
        req.params.author,
        { $set: updatedPosts},
        //Pour dire que c'est un nvx valeur
        { new: true },
        //Response
        (err, docs) => {
          if (!err) {res.send(docs); console.log(docs);}
          else console.log("Update error : " + err);
        }
      )
    });


router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknow : " + req.params.id)
    
    postsModel.PostsModel.findByIdAndRemove(
      req.params.id,
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err);
      })
  });

module.exports = router;