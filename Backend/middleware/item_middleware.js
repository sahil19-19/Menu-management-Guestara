const Items = require('../models/item')

const get_item = async (req, res, next) => {
    let item;
    try {
        item = await Items.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({
                message: "couldnt find item",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
    res.doc = item;
    next();
};

module.exports = get_item;