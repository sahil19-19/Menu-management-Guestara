const delete_item = async (req,res) => {
    try {
        await res.doc.deleteOne();
        res.status(200).json({
            message : 'Item deleted'
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json(err.message);
    }
}

module.exports = delete_item