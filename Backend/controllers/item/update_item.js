//
const update_item = async (req, res) => {
    try {
        const document = res.doc;

        // traverse keys like an array
        Object.keys(req.body).forEach((key) => {
            document[key] = req.body[key];
        });
        const updateDoc = await document.save();
        res.status(200).json({
            message: "Item updated",
            content: updateDoc,
        });
    } catch (err) {
        res.status(500).sends(err.message);
    }
};

module.exports = update_item;
