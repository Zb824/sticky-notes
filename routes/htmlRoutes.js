const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('/notes', (req, res) => {
  
});

// All other routes respond with the index.html file
router.get('*', (req, res) => {
  
});

module.exports = router;