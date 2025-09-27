import type { Request, Response } from "express";
import Review from "../models/Review";
import Movie from "../models/Movie";
import type { AuthRequest } from "../middleware/auth";

export const addReview = async (req: AuthRequest, res: Response) => {
  const { movieId, rating, comment } = req.body;
  const review = await Review.create({
    user: req.user.id,
    movie: movieId,
    rating,
    comment
  });
  res.json(review);
};

export const getReviewsByMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const reviews = await Review.find({ movie: movieId }).populate("user", "username");

  //average movie rating
  const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
  res.json({ reviews, avgRating });
};