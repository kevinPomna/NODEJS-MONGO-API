const express = require("express");
const userSchema = require("../models/user");
const { json } = require("body-parser");

const router = express.Router();
//Crear  PRODUCTO
router.post("/users",(req, res)=>{

  const user = userSchema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error)=> res.json({message: error}));
});

// Listar
router.get("/users",(req, res)=>{

    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});
// listar por id

router.get("/users/:id",(req, res)=>{
const {id}= req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});
//Actualizar id


router.put("/users/:id",(req, res)=>{
    const {id}= req.params;
    const {nombre,precio,cantidad,producto} = req.body;

        userSchema
        .updateOne({_id: id},{ $set: {nombre,precio,cantidad,producto}})
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}));
    });
    // Borrar por id
    router.delete("/users/:id",(req, res)=>{
        const {id}= req.params;
    
            userSchema
            .remove({_id: id})
            .then((data) => res.json(data))
            .catch((error)=> res.json({message: error}));
        });



module.exports = router;