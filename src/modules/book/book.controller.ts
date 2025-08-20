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
    res.status(404).send({
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

    const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === "desc" ? -1 : 1 })
      .limit(Number(limit));

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error fetching books",
      error,
    });
  }
};

export const bookController = {
  createBook,
  getBook,
};
