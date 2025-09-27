import type{ Request, Response } from "express";
import Movie from "../models/Movie";

export const getMovies = async (req: Request, res: Response) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const addMovie = async (req: Request, res: Response) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};