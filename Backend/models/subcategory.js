const mongoose = require("mongoose");
const Category = require('../models/category')

const subcategorySchema = new mongoose.Schema({
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
        default : null
    },
    tax: {
        type: Number,
        default : null
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
});

subcategorySchema.pre('save', async function(next) {
    // If taxApplicability is not explicitly set, inherit from parent category
    if (this.taxApplicable === null) {
        try {
            const parentCategory = await Category.findById(this.category);
            
            if (parentCategory) {
                this.taxApplicable = parentCategory.taxApplicable;
                this.tax = parentCategory.tax;
            }
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model("subcategory", subcategorySchema);
