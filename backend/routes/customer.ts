import express from 'express';
import { getCustomer } from '../controller/customer';

const router = express.Router();

router.get('/customer', getCustomer)