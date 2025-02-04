const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
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
    },
    tax: {
        type: Number,
        required: function() { return this.taxApplicable; },
    },
    baseAmount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    totalAmount: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required : "true"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
    },
});

// Calculate total amount before saving
itemSchema.pre("save", function (next) {
    const tempAmount = this.baseAmount - this.discount;
    if(tempAmount>0){
        this.totalAmount = tempAmount;
    }else this.totalAmount = 0;
    next();
});

module.exports = mongoose.model("item", itemSchema);
