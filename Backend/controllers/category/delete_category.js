const delete_category = async (req,res) => {
    try {
        await res.doc.deleteOne();
        res.status(200).json({
            message : 'Category deleted'
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json(err.message);
    }
}

module.exports = delete_category