const router = require("express").Router();
const { workouts } = require('../models');

router.get('/api/workouts', (req, res) => {
    workouts.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }]).sort({ _id: 1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', async (req, res) => {
    try {
        const workout = await workouts.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
        console.log(workout);
        res.json(workout)
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/api/workouts', ({ body }, res) => {
    workouts.create(body)
    .then(workoutdb => {
        res.json(workoutdb)
    })
    .catch(err => {
        res.status(400).json(err);
    })
}); 



module.exports = router;