const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    cantidad: {
        type: Number,
        require:true
    },
    provedor: {
        type: String,
        require:true
    }



});
module.exports = mongoose.model('User',userSchema);
