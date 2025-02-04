const Item = require('../../models/item')

const search_item = async (req, res) => {
    try{
        const {Name} = req.params;
        const result =  await Item.find({name : Name});
        if(result.length){
            return res.status(200).json(result);
        }
        res.status(400).json('Item not found');
    } catch(err){
        res.status(500).json(err.message);
    }
};

module.exports = search_item;