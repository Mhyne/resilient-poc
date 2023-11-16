const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/resilient-poc'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export var MessageSchema:Schema = new Schema({
    to: Number,
    from: Number,
    body: String
},{timestamps: true});

module.exports = mongoose.model('Message', MessageSchema);
