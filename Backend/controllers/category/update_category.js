const update_category = async (req, res) => {
    try {
        const document = res.doc;
        Object.keys(req.body).forEach((key) => {
            document[key] = req.body[key];
        });
        const updateDoc = await document.save();
        res.status(200).json({
            message: "category updated",
            content: updateDoc,
        });
    } catch (err) {
        res.status(500).sends(err.message);
    }
};

module.exports = update_category;
