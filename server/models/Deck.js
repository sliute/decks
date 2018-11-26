const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const DeckSchema = new Schema({
    description: String,
    name: String,
    url: String
});

module.exports = Mongoose.model('Deck', DeckSchema);