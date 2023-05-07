import express from 'express'

const router = express.Router()

router.post('/api/users/signin', (req:any, res:any) => {
    res.send('hi there!');
});

export {router as signinRouter}