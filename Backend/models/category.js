const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    taxApplicable: {
        type: Boolean,
        default: false,
    },
    tax: {
        type: Number,
        required: function() { return this.taxApplicable; },
    },
    taxType: {
        type: String,
        required: function() { return this.taxApplicable; } 
    },
});

module.exports = mongoose.model("category", categorySchema);
