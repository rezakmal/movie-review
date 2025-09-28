import { Router } from "express";
import { addReview, getReviewsByMovie } from "../controllers/reviewController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/", auth, addReview);
router.get("/:movieId", getReviewsByMovie);

export default router;