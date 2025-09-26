import mongoose, { Schema } from "mongoose";

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  movie: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String }
}, { timestamps: true });

export default mongoose.model<IReview>("Review", reviewSchema);