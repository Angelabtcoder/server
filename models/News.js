const mongoose = require('mongoose');

const time = Date.now();
const today = new Date(time);
  
const NewsSchema = mongoose.Schema({
    author: {type: String,required: true},
    title: { type: String, required:true},
    description: { type: String, required: true},
    date: { type: String, default: today.toDateString()},
    content: { type: String, required: true}
});

module.exports = mongoose.model('News', NewsSchema);