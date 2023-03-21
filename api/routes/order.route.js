import express from "express";
import { verifyToken } from "../midelware/jwt.js";
import { getOrder, createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrder);

export default router;
