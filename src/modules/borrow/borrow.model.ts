import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";
import Book from "../book/book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Middleware: Reduce book copies before saving
borrowSchema.pre("save", async function (next) {
  const borrow = this as any; 
  const book = await Book.findById(borrow.book); 
  if (!book) return next(new Error("Book not found"));

  if (book.copies < borrow.quantity) {
    return next(new Error("Not enough copies available"));
  }

  book.copies -= borrow.quantity;

  try {
    await (book as any).updateAvailability(); 
  } catch (err) {
    return next(err as Error);
  }

  next();
});
export const Borrow = model<IBorrow>("Borrow", borrowSchema);
