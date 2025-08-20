import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response) => {
  const data = await Book.create(req.body);
  try {
    res.send({
      success: true,
      message: "Book Created Successfully.",
      data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: "Validation failed.",
      error,
    });
  }
};

const getBook = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "4",
    } = req.query;
    const query: any = {};
    if (filter) query.genre = filter;

    const data = await Book.find(query)
      .sort({ [sortBy as string]: sort === "desc" ? -1 : 1 })
      .limit(Number(limit));

    if (!data)
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching books",
      error,
    });
  }
};

const getBookById = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const data = await Book.findById(bookId);
  try {
    if (!data)
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });

    res.json({
      success: true,
      message: "Book retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching book",
      error,
    });
  }
};

const updateBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const data = await Book.findByIdAndUpdate(bookId, req.body, {
    new: true,
    runValidators: true,
  });
  try {
    if (!data)
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });

    res.json({
      success: true,
      message: "Book update successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Update Book failed.",
      error,
    });
  }
};
const deleteBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const data = await Book.findByIdAndDelete(bookId);
  try {
    res.send({
      success: true,
      message: "Book deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      error,
    });
  }
};

export const bookController = {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
};
