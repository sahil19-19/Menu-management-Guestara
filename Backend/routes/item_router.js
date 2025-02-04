const express = require('express');
const router = express.Router();

const create_item = require('../controllers/item/create_item')
const delete_item = require('../controllers/item/delete_item')
const get_items = require('../controllers/item/get_items')
const get_item = require('../controllers/item/get_item')
const update_item = require('../controllers/item/update_item')
const search_item = require('../controllers/item/search_item')
const middleware = require('../middleware/item_middleware') 

router.post('/',create_item);

router.delete('/:id', middleware, delete_item);

router.get('/', get_items);

router.get('/:id', middleware, get_item);

router.patch('/:id', middleware, update_item);

router.get('/search/:Name', search_item);

module.exports = router;