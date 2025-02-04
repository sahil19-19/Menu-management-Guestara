const Subcategory = require("../../models/subcategory");

const create_sub = async (req, res) => {
    try {
        const subcat = new Subcategory(req.body);
        await subcat.save();
        res.status(201).json({
            message: "new subcategory created",
            content: subcat,
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = create_sub;
