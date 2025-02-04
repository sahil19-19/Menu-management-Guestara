const Subcategory = require('../models/subcategory')

const get_subcat = async (req, res, next) => {
    let subcategory;
    try {
        subcategory = await Subcategory.findById(req.params.id);
        if (subcategory == null) {
            return res.status(404).json({
                message: "couldnt find subcategory",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
    res.doc = subcategory;
    next();
};

module.exports = get_subcat;