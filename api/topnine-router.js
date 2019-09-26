const router = require('express').Router();
const db = require('../data/topnine-model.js')

router.get('/', (req, res)=>{
    db.find()
    .then(topnines=>{
        res.status(200).json(topnines)
    })
    .catch(error => {
        res.status(500).json({message: 'The TopNine information could not be retrieved.'});
      })
})

router.post('/', async(req, res)=>{
    const {UserName, Rank, TopNineItem, Category} = req.body
    const check = await db.findBy({UserName, Rank, Category}).first()
    if(!UserName || !Rank || !TopNineItem || !Category){
        res.status(400).json({ Message: "Please provide UserName, Rank, TopNineItem and Category!" })
    } else if(Rank > 9 || Rank < 1){
        res.status(400).json({ Message: "Only Top 9 items Could be added!" })
    } else if(check){
        res.status(400).json({ Message: `You already added your top ${Rank}` })
    }else {
        db.add(req.body)
        .then(posted=>{
            res.status(201).json(posted)
        })
        .catch(error=>{
            res.status(500).json({ message: "There was an error while saving the post to the database" })
        })
    }
})

router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id
    
        db.remove(id)
            .then(deleted => res.status(200).json(deleted))
            .catch(error => {
                    console.log(error)
                    res.status(500).json({ message: 'One of your top nine item could not be removed' })
            })

});

router.put('/:id', validateUserId, (req, res) => {
    const id = req.params.id
    const change = req.body
        db.update(id, change)
            .then(updated => res.status(201).json(updated))
            .catch(error => {
                    console.log(error)
                    res.status(500).json({ message: 'The user information could not be modified.' })
            })

});


//custom middleware

function validateUserId(req, res, next) {
    const id = req.params.id
       db.findById(id)
            .then(user => {
                    if (user) {
                            req.use = user
                            next()

                    } else {
                            res.status(400).json({ message: "invalid user id" })
                    }
            })
            .catch(error => {
                    console.log(error)
                    res.status(500).json({ message: 'Error processing request' })
            })


};

module.exports = router