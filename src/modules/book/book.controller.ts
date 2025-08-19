import { Request, Response } from "express";
import Book from "./book.model"

const createBook = async(req: Request, res: Response) => {
    const data = await Book.create(req.body);
    try{
        res.send({
            success: true,
            message: "Book Created Successfully.",
            data
        })
    }catch(error:any){
        res.status(404).send({
            success: false,
            message: "Validation failed.",
            error
        })
    }
}

export const bookController = {
    createBook,
}