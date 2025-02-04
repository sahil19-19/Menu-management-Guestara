const Subcategory = require('../../models/subcategory');

const get_categories = async(req,res) => {
    try {
        const categories = await Subcategory.find();
        res.status(200).json(categories);
    } catch(err){
        res.status(500).json({
            message : err.message
        })
    }
}

module.exports = get_categories;