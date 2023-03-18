import express from "express";
import {
  createReview,
  getReview,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:id", getReview);
router.post("/:id", deleteReview);

export default router;
