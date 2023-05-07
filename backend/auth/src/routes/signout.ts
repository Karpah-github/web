import express from 'express'

const router = express.Router()

router.post('/api/users/signout', (req:any, res:any) => {
    res.send('hi there!');
});

export {router as signoutRouter}