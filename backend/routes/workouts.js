const router = require('express').Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workout' });
});

// POST a new workout
router.post('/', (req, res) => {
    res.json({ msg: 'POST a new workout' });
});

// Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout' });
});

// UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a new workout' });
});

module.exports = router;