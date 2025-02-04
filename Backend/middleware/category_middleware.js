const Category = require('../models/category')

const get_cat = async (req, res, next) => {
    let category;
    try {
        category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({
                message: "couldnt find category",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
    res.doc = category;
    next();
};

module.exports = get_cat;