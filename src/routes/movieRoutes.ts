import { Router } from "express";
import { getMovies, addMovie } from "../controllers/movieController";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", getMovies);
router.post("/", auth, addMovie);

export default router;