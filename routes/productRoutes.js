import express from "express";
import { getProducts } from "../controllers/productController.js";
import { notAllowed } from "../utils/ShareFunc.js";


const router = express.Router();


router.route('/').get(getProducts).all(notAllowed);


export default router;