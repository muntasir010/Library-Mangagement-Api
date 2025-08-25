import { Router } from "express";
import { borrowController} from "./borrow.controller";

export const borrowRoute = Router();
borrowRoute.post("/", borrowController.createBorrowBook);
borrowRoute.get("/", borrowController.getBorrowSummary);
