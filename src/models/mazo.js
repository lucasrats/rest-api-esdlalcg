const mongoose = require('mongoose');

const cartaBDSchema = new mongoose.Schema({
    _id: String,
    code: String,        
    copias: Number
});

const mazoSchema = new mongoose.Schema({

    name:   {
        type: String,
        required: true
    },
    date_creation:   {
        type: Date,
        required: true
    },
    date_update:   {
        type: Date,
        required: true
    },
    description_md:   {
        type: String,
        required: false
    },
    user_id:   {
        type: String,
        required: true
    },
    heroes:   {
        type: [cartaBDSchema],
        required: true
    },
    slots:    {
        type: [cartaBDSchema],
        required: true
    },
    sideslots:  {
        type: [cartaBDSchema],
        required: false
    },
    version:   {
        type: String,
        required: false
    },
    last_pack:   {
        type: String,
        required: false
    },
    freeze_comments:   {
        type: String,
        required: false
    },
    is_published:   {
        type: Boolean,
        required: true
    },
    nb_votes:   {
        type: Number,
        required: true
    },
    nb_favorites:   {
        type: Number,
        required: true
    },
    nb_comments:   {
        type: Number,
        required: true
    },
    starting_threat:   {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Mazo', mazoSchema)