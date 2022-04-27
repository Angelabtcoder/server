// ArchivedNews Routes
const express = require('express');
const router = express.Router();
const archivedController = require('../controllers/archivedController');

// api/archived
router.post('/', archivedController.createArchived);
router.get('/', archivedController.getArchived);
router.delete('/:id', archivedController.deleteOneArchived );



module.exports = router;