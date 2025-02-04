    const Category = require("../../models/category");

    const create_category = async (req, res) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.status(201).json({
                message: "new category created",
                content: category,
            });
        } catch (err) {
            console.error(err.message);
            res.status(400).json({
                message: err.message,
            });
        }
    };

    module.exports = create_category;
