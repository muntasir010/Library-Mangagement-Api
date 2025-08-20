import { Request, Response } from "express";
import { Borrow } from "./borrow.model";

const createBorrowBook = async (req: Request, res: Response) => {
  const borrow = await Borrow.create(req.body);
  try {
    res.json({
      success: true,
      message: "Book borrowed successfully.",
      data: borrow,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Borrow failed.",
      error,
    });
  }
};

export const borrowController = {
  createBorrowBook,
};
