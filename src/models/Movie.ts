import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  description: string;
  year: number;
}

const movieSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
});

export default mongoose.model<IMovie>("Movie", movieSchema);