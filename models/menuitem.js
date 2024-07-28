const mongoose = require("mongoose");
const menuitemSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
taste:{
    type: String,
    required: true,
    enum: ["sweet","sour","spice"]
},
is_drink:{
type: Boolean,
default: false
},
ingrdiants:{
    type: [String],
    default:[]
},
num_sales:{
type: Number,
default: 0
}
});
const menuitem = mongoose.model('menuitem',menuitemSchema);
module.exports= menuitem;