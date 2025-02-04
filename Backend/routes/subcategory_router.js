const express = require('express');
const router = express.Router();

const create_subcategory = require('../controllers/subcategory/create_sub')
const delete_subcategory = require('../controllers/subcategory/delete_sub')
const get_subcategories = require('../controllers/subcategory/get_subs')
const get_subcategory = require('../controllers/subcategory/get_sub')
const update_subcategory = require('../controllers/subcategory/update_sub')
const middleware = require('../middleware/subcat_middleware')

router.post('/',create_subcategory);

router.delete('/:id', middleware, delete_subcategory);

router.get('/', get_subcategories);

router.get('/:id', middleware, get_subcategory);

router.patch('/:id', middleware, update_subcategory);

module.exports = router;