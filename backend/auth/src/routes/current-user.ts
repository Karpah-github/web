import express from 'express'

const router = express.Router()

router.get('/api/users/currentuser', (req:any, res:any) => {
    res.send('hi there!');
});

export {router as currentUserRouter}