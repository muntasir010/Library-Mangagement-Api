import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    genre: {
      type: String,
      trim: true,
      required: true,
      enum: {
        values: ["FICTION","NON_FICTION","SCIENCE","HISTORY","BIOGRAPHY","FANTASY"]
      }},
    isbn: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    copies: {
      type: Number,
      min: 0,
      trim: true,
      required: true,
    },
    available: {
      type: Boolean,
      trim: true,
      default: true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


// instance methods when update availability copies are 0
bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
  return this.save();
};

const Book = model<IBook>("Book", bookSchema);
export default Book;