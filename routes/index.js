const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('This is the index page.');
});

module.exports = router;
