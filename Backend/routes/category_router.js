const express = require('express');
const router = express.Router();

const create_category = require('../controllers/category/create_category')
const delete_category = require('../controllers/category/delete_category')
const get_categories = require('../controllers/category/get_categories')
const get_category = require('../controllers/category/get_category')
const update_category = require('../controllers/category/update_category')
const middleware = require('../middleware/category_middleware')

router.post('/',create_category);

router.delete('/:id', middleware, delete_category);

router.get('/', get_categories);

router.get('/:id', middleware, get_category);

router.patch('/:id', middleware, update_category);

module.exports = router;