const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please add title"],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);