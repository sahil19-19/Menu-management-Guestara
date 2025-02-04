//
const get_item = (req,res) => {
    res.status(200).json(res.doc);
}

module.exports = get_item