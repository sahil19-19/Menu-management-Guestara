const Item = require("../../models/item");

const create_item = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json({
            message: "New item created",
            content: item,
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = create_item;
